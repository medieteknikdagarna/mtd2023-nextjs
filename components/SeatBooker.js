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

const floor4_all = require("../public/content/seat-info/floor4.json");
const floor5_all = require("../public/content/seat-info/floor5.json");

export const selectedContext = React.createContext();

export default function SeatBooker({ type }) {
  const [activeSeats, setActiveSeats] = useState(floor5_all);
  const [floor4_res, setFloor4] = useState([]);
  const [floor5_res, setFloor5] = useState([]);

  const [hasSubmitted, setSubmitted] = useState(false);

  const [activeLevel, setLevel] = useState(5);

  const [selectedSeat, setSelected] = useState(floor5_all[0]);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [lang, setLang] = useContext(languageContext);

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

  const f_company = useRef();
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
    if (f_company.current.value) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: f_company.current.value,
          seat: selectedSeat.seat,
          floor: activeLevel,
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
                          <label>Plan 4</label>
                          <input
                            className="input-radio"
                            type="radio"
                            checked={activeLevel === 4}
                            onClick={() => changeFloor(4)}
                          />
                          <label>Plan 5</label>
                          <input
                            className="input-radio"
                            type="radio"
                            checked={activeLevel === 5}
                            onClick={() => changeFloor(5)}
                          />
                        </div>
                      </div>
                      <input
                        placeholder={
                          lang === "sv" ? "Företagsnamn" : "Company name"
                        }
                        ref={f_company}
                        type="text"
                      />

                      {error && (
                        <div className="error-message">
                          <div></div>
                          <span>{error}</span>
                        </div>
                      )}
                      <Button
                        disabled={isReserved(
                          selectedSeat,
                          activeLevel === 5 ? floor5_res : floor4_res
                        )}
                        onClick={handleSubmit}
                        style={{
                          width: "100%",
                          fontSize: "1.5rem",
                          marginTop: "1rem",
                        }}
                        type="primary"
                        size="medium"
                      >
                        {hasSubmitted ? "Laddar..." : "Boka"}
                      </Button>
                    </div>
                  </div>
                )}
              </>
            </div>
          </ResponsiveContainer>
        ))}
      {reservationSuccess && "Tack för din bokning!"}
      <Footer />
    </>
  );
}
