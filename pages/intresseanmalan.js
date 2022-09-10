import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Registration from "../components/Registration";
import { languageContext } from "./_app";
import { NextSeo } from "next-seo";
import SeatBooker from "../components/SeatBooker";
export default function Register() {
  const [lang, setLang] = useContext(languageContext);
  return (
    <div>
      <NextSeo
        title={lang === "sv" ? "Intresseanmälan" : "Register of interest"}
        description="Lämna en intresseanmälan så återkommer vi med detaljer så fort vi kan!"
        canonical="https://www.medieteknikdagen.se/intresseanmalan"
      />
      <Header
        style={{ backgroundColor: "black" }}
        lightContrast
        changeOnScroll
      />
      <Registration />
      <Footer />
    </div>
  );
}
