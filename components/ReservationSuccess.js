import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Confetti from "react-dom-confetti";
import * as animationData from "../public/animation_success.json";
import { languageContext } from "../pages/_app";
const content = require("../public/content/register_complete.json");

// function formatName(name) {
//   return name.split(" ")[0];
// }

export default function ReservationSuccess({ name, company }) {
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

  useEffect(() => {
    setTimeout(() => {
      setExplode(true);
    }, 100);
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="reservation-section">
      <div className="reservation-success">
        <Confetti config={config} active={shouldExlpode} />
        <div className="thank-you">
          <div>
            <h2>{content[lang].title}</h2>
            <p>
              {content[lang].thanks[0]} <b>{name}</b> {content[lang].thanks[1]}
            </p>
            <p>{content[lang].body}</p>
            <p className="reservation-success--welcome">
              {content[lang].bye[0]} <b>{company}</b> {content[lang].bye[1]}
            </p>
          </div>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      </div>
    </section>
  );
}
