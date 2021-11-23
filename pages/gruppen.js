import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSubmenu from '../components/ContactSubmenu'
import TheGroup from '../components/TheGroup'
import ResponsiveContainer from '../components/ResponsiveContainer'
import { languageContext } from './_app'
import { NextSeo } from 'next-seo'

const content = require("../public/content/contact-us.json")

export default function ContactPage() {

    const [lang, setLang] = useContext(languageContext)
    
    return (
        <>
        <NextSeo title="Gruppen"
        description="Kontaktuppgifter till alla 14 gruppmedlemmar i MTD2022"
        canonical="https://www.medieteknikdagen.se/gruppen"
        />
            <Header changeOnScroll/>
            <ResponsiveContainer className="contact-container">
                <ContactSubmenu selected={"gruppen"} />
                <div className="contact-wrapper">
                <h1>{content[lang].buttons[1]}</h1>
                <TheGroup/>
                </div>
                
            </ResponsiveContainer>
            <Footer/>
        </>
    )
}
