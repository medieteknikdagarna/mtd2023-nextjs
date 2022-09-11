import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSubmenu from "../components/ContactSubmenu";
import TheGroup from "../components/TheGroup";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { languageContext } from "./_app";
import { NextSeo } from "next-seo";
import PressAndMedia from "../components/PressAndMedia";

const content = require("../public/content/contact-us.json");

export default function ContactPage() {
  const [lang, setLang] = useContext(languageContext);

  return (
    <>
      <NextSeo
        title={"Press & Media"}
        description="Här hittar ni information för press & media, samt nedladdningslänkar till våra grafiska element"
        canonical="https://www.medieteknikdagen.se/press-och-media"
      />
      <Header changeOnScroll />
      <ResponsiveContainer className="contact-container">
        <ContactSubmenu selected={"press-och-media"} />
        <div className="contact-wrapper">
          <h1>{content[lang].buttons[2]}</h1>
          <PressAndMedia />
        </div>
      </ResponsiveContainer>
      <Footer />
    </>
  );
}
