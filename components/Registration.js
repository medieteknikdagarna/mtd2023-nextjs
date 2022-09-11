import { faPaperPlane, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useContext } from "react";
import Button from "./Button";
import ResponsiveContainer from "./ResponsiveContainer";
import Link from "next/link";
import ReservationSuccess from "./ReservationSuccess";
import SignSVG from "../public/images/sign.svg";
import { languageContext } from "../pages/_app";
const content = require("../public/content/register.json");
const formContent = require("../public/content/form.json");
export default function Registration() {
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const r_name = useRef();
  const r_company = useRef();
  const r_email = useRef();
  const r_phone = useRef();
  const r_msg = useRef();
  const [lang, setLang] = useContext(languageContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitted) {
      return;
    }
    if (!r_name.current.value) {
      setError("Fyll i ditt namn, tack!");
    } else if (!r_company.current.value) {
      setError("Fyll i ert företag, tack!");
    } else if (!r_email.current.value) {
      setError("Fyll i en email, tack!");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: r_name.current.value,
          company: r_company.current.value,
          email: r_email.current.value,
          phone: r_phone.current.value,
          message: r_msg.current.value,
        }),
      };
      setSubmitted(true);
      setError(null);
      fetch("/api/register", requestOptions)
        .then((response) => response.json())
        .then((res_data) => {
          if (res_data.success) {
            setSuccess(true);
          } else {
            setError(
              "Något gick fel tyvärr. Testa igen eller skicka direkt till vår email: info@medieteknikdagen.se"
            );
            setSubmitted(false);
          }
        });
    }
  };

  return (
    <ResponsiveContainer className="registration-section">
      {success && <ReservationSuccess company={company} name={name} />}
      {!success && (
        <div className="registration-wrapper">
          <div>
            <h1>{content[lang].title}</h1>
            <p>{content[lang].body}</p>
            <SignSVG />
          </div>
          <div className="registration-form">
            <form className="register-form">
              <div className="register-form--row-container">
                <input
                  onChange={() => setName(r_name.current.value)}
                  className="register-form--input"
                  ref={r_name}
                  type="text"
                  placeholder=" "
                ></input>
                <label className="register-form--label">
                  {formContent[lang].name}
                </label>
              </div>
              <div className="register-form--row-container">
                <input
                  onChange={() => setCompany(r_company.current.value)}
                  className="register-form--input"
                  ref={r_company}
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
                  ref={r_email}
                  type="email"
                  placeholder=" "
                ></input>
                <label className="register-form--label">Email</label>
              </div>
              <div className="register-form--row-container">
                <input
                  className="register-form--input"
                  ref={r_phone}
                  type="tel"
                  //  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" "
                ></input>
                <label className="register-form--label">Tel</label>
              </div>
              <div className="register-form--row-container">
                <textarea
                  className="register-form--input"
                  ref={r_msg}
                  type="text"
                  placeholder=" "
                ></textarea>
                <label className="register-form--label">
                  {formContent[lang].message}
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
              <Button onClick={handleSubmit}>
                <FontAwesomeIcon
                  spin={submitted}
                  icon={submitted ? faCircleNotch : faPaperPlane}
                />
                {lang === "sv" ? "Skicka" : "Send"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </ResponsiveContainer>
  );
}
