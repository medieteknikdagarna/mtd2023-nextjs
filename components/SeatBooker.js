import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import axios from "axios";
import SeatMap from "./utilities/SeatMap";
import LoadingSpinner from "./LoadingSpinner";
import { isReserved } from "./utilities/SeatMap";
import ReservationSuccess from "./ReservationSuccess";
import Footer from "../components/Footer";
import ResponsiveContainer from "./ResponsiveContainer";
import { languageContext } from "../pages/_app";
import ReservSuccess from "./ReservSuccess";
const formContent = require("../public/content/form.json");
import Link from "next/link";
import { Router } from "next/router";
import BookingSuccess from "../pages/BookingSuccess";

const floor4_all = require("../public/content/seat-info/floor4.json");
const floor5_all = require("../public/content/seat-info/floor5.json");

export const selectedContext = React.createContext();

export default function SeatBooker({ type, setType }) {
  const [activeSeats, setActiveSeats] = useState(floor5_all);
  const [floor4_res, setFloor4] = useState([]);
  const [floor5_res, setFloor5] = useState([]);

  const [hasSubmitted, setSubmitted] = useState(false);

  const [activeLevel, setLevel] = useState(5);
  const [addons, setAddons] = useState({
    logotyp: "",
    monter: "",
    bankett: 0,
    bord: 0,
    stol: 0,
    tv: {
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: "",
    },
    wifi: 0,
    services: {
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: "",
      opt5: "",
    },
  });

  const [selectedSeat, setSelected] = useState(floor5_all[0]);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [lang, setLang] = useContext(languageContext);

  const f_company = useRef();
  const f_name = useRef();
  const f_email = useRef();
  const f_phone = useRef();
  const f_desc = useRef();
  const f_adress = useRef();
  const f_orgnr = useRef();
  const f_highPower = useRef();
  const f_fakturaMail = useRef();
  const f_firmaTecknare = useRef();

  const fetchData = async () => {
    fetch("/api/reserved")
      .then((response) => response.json())
      .then((data) => {
        setFloor4(
          data.filter((seat) => {
            return seat.floor == 4;
          })
        );
        setFloor5(
          data.filter((seat) => {
            return seat.floor == 5;
          })
        );
      });
  };

  const newError = (error_text) => {
    setError(error_text);
  };
  useEffect(async () => {
    await fetchData();
  }, []);

  const handleOnChange = (e) => {
    let n = e.target.value - 1;

    if (n < 0) {
      n = 0;
    } else if (n >= activeSeats.length) {
      n = activeSeats.length - 1;
    }

    const seat = activeSeats[n];

    setSelected(seat);
  };

  const changeFloor = (floor) => {
    setActiveSeats(floor === 5 ? floor5_all : floor4_all);
    setLevel(floor);
  };

  const handleSubmit = () => {
    console.log(addons);
    if (f_company.current.value) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: f_company.current.value,
          name: f_name.current.value,
          email: f_email.current.value,
          phone: f_phone.current.value,
          desc: f_desc.current.value,
          seat: selectedSeat.seat,
          floor: activeLevel,
          spons: type,
          orgnr: f_orgnr.current.value,
          logotyp: addons.logotyp,
          monter: addons.monter,
          bankett: addons.bankett,
          bord: addons.bord,
          stol: addons.stol,
          tv: addons.tv,
          wifi: addons.wifi,
          highPower: f_highPower.current.value,
          services: addons.services,
          faktura: f_fakturaMail.current.value,
          firmaTecknare: f_firmaTecknare.current.value,
        }),
      };
      setSubmitted(true);
      setError(null);
      fetch("/api/reserved", requestOptions)
        .then((response) => response.json())
        .then((res_data) => {
          if (res_data.success) {
            setReservationSuccess(true);
          } else {
            setError("This seat is already taken.");
            setSubmitted(false);
            fetchData();
          }
        });
    } else {
      newError("Please fill in all the fields correctly");
    }
  };

  return (
    <>
      {}

      {!floor4_res ||
        (!floor5_res && <LoadingSpinner />) ||
        (!reservationSuccess && (
          <ResponsiveContainer>
            <div className="seat-booker">
              <>
                <selectedContext.Provider value={[selectedSeat, setSelected]}>
                  <SeatMap
                    type={type}
                    key={activeLevel}
                    activeFloor={activeLevel}
                    seats={activeSeats}
                    reservations={activeLevel == 5 ? floor5_res : floor4_res}
                    selected={selectedSeat}
                  />
                </selectedContext.Provider>
                {!reservationSuccess && (
                  <div className="form-info">
                    <div className="form-top">
                      <h1 className={`type-header seat-${type}`}>{type}</h1>
                      <h2>{"Plats #" + selectedSeat.seat}</h2>
                      <div className="indicator">
                        <div
                          style={{
                            backgroundColor: isReserved(
                              selectedSeat,
                              activeLevel == 5 ? floor5_res : floor4_res
                            )
                              ? "#FF7C7C"
                              : "#97FF86",
                          }}
                          className="indicator--icon"
                        ></div>
                        <h4>
                          {isReserved(
                            selectedSeat,
                            activeLevel == 5 ? floor5_res : floor4_res
                          )
                            ? "Reserverad"
                            : "Ledig"}
                        </h4>
                      </div>
                      <p className="seat-information-p">
                        {lang === "sv"
                          ? "Mässan tar plats på våning 4 samt 5 i Täppan, Campus Norrköping. Ni bokar genom att välja en plats och våning i vår platskarta."
                          : "The fair will take place on floor 4 and 5 in Täppan at Campus Norrköping. Book your spot by choosing floor and seat in the figure."}
                      </p>
                    </div>
                    <div className="booking-form">
                      <div className="flex-input">
                        <div className="div-radio">
                          <label htmlFor="floor-4">Plan 4</label>
                          <input
                            id="floor-4"
                            name="floor"
                            className="input-radio"
                            type="radio"
                            onClick={() => changeFloor(4)}
                          />
                          <label htmlFor="floor-5">Plan 5</label>
                          <input
                            name="floor"
                            id="floor-5"
                            className="input-radio"
                            type="radio"
                            onChange={() => changeFloor(5)}
                            defaultChecked
                          />
                        </div>
                      </div>
                      <div className="spons-box">
                        <h2>Välj Sponsorpaket</h2>
                        <input
                          type="radio"
                          name="spons"
                          value="Mässplats"
                          id="mässplats"
                          defaultChecked
                          onChange={() => setType("Mässplats")}
                        />
                        <label htmlFor="mässplats">Mässplats</label>
                        <input
                          type="radio"
                          name="spons"
                          value="Sponsor"
                          id="sponsor"
                          onClick={() => setType("Sponsor")}
                        />
                        <label htmlFor="sponsor">Sponsor</label>
                        <input
                          type="radio"
                          name="spons"
                          value="Huvudsponsor"
                          id="huvudsponsor"
                          onClick={() => setType("Huvudsponsor")}
                        />
                        <label htmlFor="huvudsponsor">Huvudsponsor</label>
                      </div>

                      {error && (
                        <div className="error-message">
                          <div></div>
                          <span>{error}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            </div>
            <div className="registration-form">
              <form className="register-form">
                <div className="register-form--row-container">
                  <input
                    className="register-form--input"
                    ref={f_name}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className="register-form--label">
                    {formContent[lang].name}
                  </label>
                </div>
                <div className="register-form--row-container">
                  <input
                    className="register-form--input"
                    ref={f_company}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className="register-form--label">
                    {formContent[lang].company}
                  </label>
                </div>
                <div className="register-form--row-container">
                  <input
                    className="register-form--input"
                    ref={f_adress}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className="register-form--label">
                    {lang === "sv" ? "Företags adress" : "Company adress"}
                  </label>
                </div>
                <div className="register-form--row-container">
                  <input
                    className="register-form--input"
                    ref={f_orgnr}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className="register-form--label">
                    {lang === "sv"
                      ? "Organisationsnummer"
                      : "Organisation number"}
                  </label>
                </div>
                <div className="register-form--row-container">
                  <input
                    className="register-form--input"
                    ref={f_email}
                    type="email"
                    placeholder=" "
                  ></input>
                  <label className="register-form--label">Email</label>
                </div>
                <div className="register-form--row-container">
                  <input
                    className="register-form--input"
                    ref={f_phone}
                    type="tel"
                    //  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder=" "
                  ></input>
                  <label className="register-form--label">Tel</label>
                </div>
                <div className="register-form--row-container">
                  <textarea
                    className="register-form--input"
                    ref={f_desc}
                    type="text"
                    placeholder=" "
                  ></textarea>
                  <label className="register-form--label">
                    {lang === "sv"
                      ? "Beskrivning av företag för app och webbsida"
                      : "Description of company for app and website"}
                  </label>
                </div>
                <span>
                  {formContent[lang].accept}{" "}
                  <Link href="/policy">{formContent[lang].link}</Link>
                </span>
                {error && (
                  <div className="registration-error-message">
                    <div></div>
                    <span>{error}</span>
                  </div>
                )}
              </form>
            </div>
            <h2>Tillägg</h2>
            <div className="spons-box">
              <h3>Logotyp</h3>
              <span>
                Logotypen vi vill ska användas har skickats till
                webb@medieteknikdagen.se
              </span>
              <input
                type="radio"
                name="logotyp"
                id="logotyp-op1"
                value="logotyp-op1"
                onClick={() =>
                  setAddons((prev) => ({ ...prev, logotyp: "Ja" }))
                }
              />
              <label htmlFor="logotyp-op1">Ja</label>
              <input
                type="radio"
                name="logotyp"
                id="logotyp-op2"
                value="logotyp-op2"
                onClick={() =>
                  setAddons((prev) => ({
                    ...prev,
                    logotyp: "Nej, skickar senare",
                  }))
                }
              />
              <label htmlFor="logotyp-op2">Nej, skickar alldeles strax!</label>
              <h3>Bankettbiljetter</h3>
              <span>
                Hur många bankettbiljetter vill ni ha inför banketten som hålls
                efter MTD (600kr/st)
              </span>
              <input
                type="number"
                min={0}
                defaultValue={type == "Huvudsponsor" ? 3 : 0}
                onChange={(e) => {
                  setAddons((prev) => ({ ...prev, bankett: e.target.value }));
                }}
              />
              <h3>Montertransport</h3>
              <input
                type="radio"
                name="monter"
                value="Skickar i förväg via godsmottagning"
                id="monter-opt1"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    monter: e.target.value,
                  }))
                }
              />
              <label htmlFor="monter-opt1">
                Skicka i förväg via godsmottagningen
              </label>
              <input
                type="radio"
                name="monter"
                value="Tar med själv till mässan"
                id="monter-opt2"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    monter: e.target.value,
                  }))
                }
              />
              <label htmlFor="monter-opt2">
                Ta med själv till mässan på mässdagen{" "}
              </label>
              <h3>Persontransport</h3>
              <p>
                Behöver ni transport inom Norrköping t.ex. från Resecentrum till
                Campus på mässdagen?
              </p>
              <input
                type="radio"
                name="person-transport"
                id="person-transport-opt1"
              />
              <label htmlFor="person-transport-opt1">Ja</label>
              <input
                type="radio"
                name="person-transport"
                id="person-transport-opt2"
              />
              <label htmlFor="person-transport-opt2">Nej</label>
              <h3>Extra ståbord</h3>
              <span>
                Alla företag erbjuds ett ståbord. Utöver det kan fler ståbord
                beställas för 300kr/st. Fyll i antalet bord ni vill ha utöver
                det som ingår. (Vill ni inte ha något extra fyller ni i 0)
              </span>
              <input
                type="number"
                defaultValue={0}
                min={0}
                name="ståbord"
                id="ståbord"
                onChange={(e) =>
                  setAddons((prev) => ({ ...prev, bord: e.target.value }))
                }
              />
              <h3>Extra barstol</h3>
              <span>100kr/st - En barstol ingår</span>
              <input
                type="number"
                defaultValue={0}
                min={0}
                name="stol"
                id="stol"
                onChange={(e) =>
                  setAddons((prev) => ({ ...prev, stol: e.target.value }))
                }
              />
              <h3>Extra TV-skärm</h3>
              <input
                type="checkbox"
                name="tv"
                id="tv-opt1"
                value="32tum"
                className="tv-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    tv: { ...prev.tv, opt1: e.target.value },
                  }))
                }
              />
              <label htmlFor="tv-opt1">32" TV-skärm med stativ 2500kr/st</label>
              <input
                type="checkbox"
                name="tv"
                id="tv-opt2"
                value="40tum"
                className="tv-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    tv: { ...prev.tv, opt2: e.target.value },
                  }))
                }
              />
              <label htmlFor="tv-opt2">40" TV-skärm med stativ 3200kr/st</label>
              <input
                type="checkbox"
                name="tv"
                id="tv-opt3"
                value="47tum"
                className="tv-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    tv: { ...prev.tv, opt3: e.target.value },
                  }))
                }
              />
              <label htmlFor="tv-opt3">47" TV-skärm med stativ 3900kr/st</label>
              <input
                type="checkbox"
                name="tv"
                id="tv-opt4"
                value="55tum"
                className="tv-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    tv: { ...prev.tv, opt4: e.target.value },
                  }))
                }
              />
              <label htmlFor="tv-opt4">55" TV-skärm med stativ 4300kr/st</label>
              <h3>Uppskattat antal enheter som behöver trådlöst nätverk?</h3>
              <input
                type="number"
                name="wifi"
                id="wifi"
                defaultValue={0}
                min={0}
                onClick={(e) =>
                  setAddons((prev) => ({ ...prev, wifi: e.target.value }))
                }
              />
              <h3>
                Har ni någon elutrustning som drar särskilt mycket ström, i så
                fall vad?
              </h3>
              <input
                className="register-form--input"
                type="text"
                placeholder=" "
                ref={f_highPower}
              ></input>
              <h3>Erbjuder ni tjänster för besökarna?</h3>
              <input
                type="checkbox"
                name="services"
                id="service-opt1"
                value="Exjobb"
                className="services-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    services: { ...prev.services, opt1: e.target.value },
                  }))
                }
              />
              <label htmlFor="service-opt1">Exjobb</label>
              <input
                type="checkbox"
                name="services"
                id="service-opt2"
                value="Praktik"
                className="services-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    services: { ...prev.services, opt2: e.target.value },
                  }))
                }
              />
              <label htmlFor="service-opt2">Praktik</label>
              <input
                type="checkbox"
                name="services"
                id="service-opt3"
                value="Trainee"
                className="services-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    services: { ...prev.services, opt3: e.target.value },
                  }))
                }
              />
              <label htmlFor="service-opt3">Trainee</label>
              <input
                type="checkbox"
                name="services"
                id="service-opt4"
                value="Sommarjobb"
                className="services-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    services: { ...prev.services, opt4: e.target.value },
                  }))
                }
              />
              <label htmlFor="service-opt4">Sommarjobb</label>
              <input
                type="checkbox"
                name="services"
                id="service-opt5"
                value="Anställning"
                className="services-checkbox"
                onClick={(e) =>
                  setAddons((prev) => ({
                    ...prev,
                    services: { ...prev.services, opt5: e.target.value },
                  }))
                }
              />
              <label htmlFor="service-opt5">Anställning</label>
              <h3>Faktureringsuppgifter</h3>
              <span>Vilken e-postadress ska fakturan skickas till?</span>
              <input
                className="register-form--input"
                type="text"
                placeholder=" "
                ref={f_fakturaMail}
              />
              <h3>Eventuell firmatecknare</h3>
              <span>
                Fyll i nedan namn och position på eventuell firmatecknare eller
                annan ansvarig som kommer att skriva på kommande avtal.
              </span>
              <input
                className="register-form--input"
                type="text"
                placeholder=" "
                ref={f_firmaTecknare}
              />
            </div>
            <Button
              disabled={isReserved(
                selectedSeat,
                activeLevel === 5 ? floor5_res : floor4_res
              )}
              onClick={handleSubmit}
              style={{
                fontSize: "1.5rem",
                marginTop: "2rem",
              }}
              type="primary"
              size="medium"
            >
              {hasSubmitted ? "Laddar..." : "Boka"}
            </Button>
          </ResponsiveContainer>
        ))}
      {reservationSuccess && (
        <ReservSuccess
          name={f_name.current.value}
          company={f_company.current.value}
        />
      )}
      <Footer />
    </>
  );
}
