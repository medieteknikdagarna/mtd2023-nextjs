import React, { useContext } from 'react'
import { languageContext } from '../pages/_app'
import flag_eng from '../public/images/flag_eng.png'
import flag_sv from '../public/images/flag_sv.png'

export default function LanguageFlag() {
    const [lang, setLang] = useContext(languageContext)
    const flag = lang !== "en" ? flag_eng : flag_sv;

    
    return (
        <img alt="Flag of selected language" onClick={() => setLang(prevLang => prevLang === "sv" ? "en" : "sv")} className="flag-icon" src={flag.src}></img>
    )
}
