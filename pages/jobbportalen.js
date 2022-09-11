import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Registration from "../components/Registration";
import { languageContext } from "./_app";
import { NextSeo } from "next-seo";
import JobPortal from "../components/JobPortal";
export default function Register() {
  const [lang, setLang] = useContext(languageContext);
  return (
    <div>
      <NextSeo
        title={lang === "sv" ? "Jobbportalen" : "Job portal"}
        description="Hitta din perfekta anställning, exjobb eller sommarjobb!"
        canonical="https://www.medieteknikdagen.se/jobbportalen"
      />
      <Header
        style={{ backgroundColor: "black" }}
        lightContrast
        changeOnScroll
      />

      <JobPortal />
      <Footer />
    </div>
  );
}
