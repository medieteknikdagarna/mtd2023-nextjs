import React, { useState, useContext, useEffect } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Confetti from "react-dom-confetti";
import * as animationData from "../public/animation_success.json";
import { languageContext } from "../pages/_app";
const content = require("../public/content/register_complete.json");

export default function ReservSucces({ name, company }) {
  const [shouldExlpode, setExplode] = useState(false);
  const [lang, setLang] = useContext(languageContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const config = {
    angle: "90",
    spread: "203",
    startVelocity: 40,
    elementCount: "99",
    dragFriction: "0.07",
    duration: 3000,
    stagger: "5",
    width: "15px",
    height: "14px",
    perspective: "1000px",
    colors: ["#FF984A", "#3B4850 ", "#FFF5EE"],
  };

  return (
    <section className="reservation-section">
      <div className="reservation-success">
        <Confetti config={config} active={shouldExlpode} />
        <div className="thank-you">
          <div>
            <h2>Tack {name}!</h2>
            <p>Tack, för din bokning!</p>
            <p>
              Vi ser fram emot att få träffa er på mässdagen och kommer att höra
              av oss så fort vi kan med kontrakt!
            </p>
            <p className="reservation-success--welcome">
              Vi önskar dig och resten av <b>{company}</b> varmt välkomna till
              Medieteknikdagen 2022!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
