import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Registration from '../components/Registration'
import { languageContext } from './_app'
import { NextSeo } from 'next-seo'
export default function Register() {
    const [lang, setLang] = useContext(languageContext)
    return (
        <div>
        <NextSeo title={lang === "sv" ? "MTD2022 | Intresseanmälan" : "MTD2022 | Register of interest"} 
        description="Lämna en intresseanmälan så återkommer vi med detaljer så fort vi kan!"
        canonical="https://www.medieteknikdagen.se/register"
        />
            <Header style={{backgroundColor: "black"}} lightContrast changeOnScroll/>
            <Registration/>

            <Footer/>
        </div>
    )
}
