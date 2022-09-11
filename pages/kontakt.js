import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSubmenu from "../components/ContactSubmenu";
import TheGroup from "../components/TheGroup";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { languageContext } from "./_app";
import { NextSeo } from "next-seo";
import ContactUs from "../components/ContactUs";

const content = require("../public/content/contact-us.json");

export default function ContactPage() {
  const [lang, setLang] = useContext(languageContext);

  return (
    <>
      <NextSeo
        title={"Kontakta oss"}
        description="Vi älskar att snacka! Skriv till oss du har frågor om mässan, partnerskap, allmäna frågor - eller bara vill säga hej!"
        canonical="https://www.medieteknikdagen.se/kontakt"
      />
      <Header changeOnScroll />
      <ResponsiveContainer className="contact-container">
        <ContactSubmenu selected={"kontakt"} />
        <div className="contact-wrapper">
          <h1>{content[lang].buttons[0]}</h1>
          <ContactUs />
        </div>
      </ResponsiveContainer>
      <Footer />
    </>
  );
}
