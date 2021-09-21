import React,{ useState } from "react";


// ALL SCSS IMPORTS

import '../styles/_variables.scss'
import '../styles/About.scss'
import '../styles/AboutInfo.scss'
import '../styles/Button.scss'
import '../styles/ContactCard.scss'
import '../styles/ContactMap.scss'
import '../styles/ContactUs.scss'
import '../styles/ContactSubmenu.scss'
import '../styles/Footer.scss'
import '../styles/Header.scss'
import '../styles/InfoSection.scss'
import '../styles/InfoWithStars.scss'
import '../styles/LandingPage.scss'
import '../styles/Lecturer.scss'
import '../styles/Menu.scss'
import '../styles/StarAnimation.scss'
import '../styles/App.scss'
import '../styles/Policy.scss'
import '../styles/Book.scss'
import '../styles/SeatBooker.scss'
import '../styles/PressAndMedia.scss'
import '../styles/DownloadButton.scss'
import '../styles/MemberCard.scss'
import '../styles/TheGroup.scss'
import '../styles/ReservationSuccess.scss'


import { useRouter } from "next/router";

export const languageContext = React.createContext();

function MyApp({ Component, pageProps }) {

  const res = useRouter()
  const q = res

  const [language, setLanguage] = useState("sv");

  return (
  <languageContext.Provider value={[language,setLanguage]}>
    <Component {...pageProps} />
  </languageContext.Provider>
  
  )
}

export default MyApp
