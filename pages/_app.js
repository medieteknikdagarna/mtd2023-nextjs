import React, { useState } from "react";
import AcceptPolicy from "../components/AcceptPolicy";

// ALL SCSS IMPORTS

import "../styles/_variables.scss";
import "../styles/fair.scss";
import "../styles/AboutInfo.scss";
import "../styles/Button.scss";
import "../styles/ContactCard.scss";
import "../styles/ContactMap.scss";
import "../styles/ContactUs.scss";
import "../styles/ContactSubmenu.scss";
import "../styles/Footer.scss";
import "../styles/Header.scss";
import "../styles/InfoSection.scss";
import "../styles/InfoWithIcons.scss";
import "../styles/LandingPage.scss";
import "../styles/Lecturer.scss";
import "../styles/Menu.scss";
import "../styles/StarAnimation.scss";
import "../styles/App.scss";
import "../styles/Policy.scss";
import "../styles/Book.scss";
import "../styles/SeatBooker.scss";
import "../styles/PressAndMedia.scss";
import "../styles/DownloadButton.scss";
import "../styles/MemberCard.scss";
import "../styles/TheGroup.scss";
import "../styles/ReservationSuccess.scss";
import "../styles/LoadingSpinner.scss";
import "../styles/Lecturers.scss";
import "../styles/TheFair.scss";
import "../styles/ResponsiveContainer.scss";
import "../styles/AcceptPolicy.scss";
import "../styles/ContactForm.scss";
import "../styles/StickyContact.scss";
import "../styles/Gallery.scss";
import "../styles/Carousel.scss";
import "../styles/Registration.scss";
import "../styles/companies.scss";
import "../styles/ThankYou.scss";
import "../styles/Error404.scss";
import "../styles/JobPortal.scss";
import "../styles/BookingSuccess.scss";
import "../styles/CompaniesWithInfo.scss";
import "../styles/Backdrop.scss";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

import { useRouter } from "next/router";
import StickyContact from "../components/StickyContact";

export const languageContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const res = useRouter();
  const q = res;

  const [language, setLanguage] = useState("sv");

  return (
    <languageContext.Provider value={[language, setLanguage]}>
      <Head>
        <meta
          name="google-site-verification"
          content="RxmIo5rnOM-a2ckA5J2GeYpMcYoOOqurhNqn9pYd2hs"
        />
      </Head>
      <AcceptPolicy />
      <StickyContact />
      <Component {...pageProps} />
    </languageContext.Provider>
  );
}

export default MyApp;
