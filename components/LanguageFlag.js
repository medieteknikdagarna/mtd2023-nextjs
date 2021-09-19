import React, { useContext } from 'react'
import { languageContext } from '../pages/_app'
import flag_eng from '../public/images/flag_eng.png'
import flag_sv from '../public/images/flag_sv.png'
import Image from 'next/image'

export default function LanguageFlag() {
    const [lang, setLang] = useContext(languageContext)
    const flag = lang !== "en" ? flag_eng : flag_sv;

    
    return (
        <Image onClick={() => setLang(prevLang => prevLang === "sv" ? "en" : "sv")} className="flag-icon flag-button" alt="Flag of the current language" src={flag.src}></Image>
    )
}
