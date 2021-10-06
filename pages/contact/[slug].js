import React, { useContext } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactSubmenu from '../../components/ContactSubmenu'
import ContactUs from '../../components/ContactUs.js'
import PressAndMedia from '../../components/PressAndMedia'
import { useRouter } from 'next/router'
import TheGroup from '../../components/TheGroup'
import ResponsiveContainer from '../../components/ResponsiveContainer'
import { languageContext } from '../_app'

const content = require("../../public/content/contact-us.json")

export default function ContactPage() {

    const [lang, setLang] = useContext(languageContext)

    const router = useRouter()
    const { slug } = router.query

    const getPageOfSlug = (s) =>{
        if (s.toLowerCase() === "the-group"){
            return <TheGroup/>
        }
        else if (s.toLowerCase() === "press-and-media"){
            return <PressAndMedia/>
        }
        else{
            return <ContactUs/>
        }
    }

    const getTitleOfSlug = (s) =>{
        if (s.toLowerCase() === "the-group"){
            return content[lang].buttons[1]
        }
        else if (s.toLowerCase() === "press-and-media"){
            return content[lang].buttons[2]
        }
        else{
            return content[lang].buttons[0]
        }
    }
    
    return (
        <>
            <Header changeOnScroll/>
            <ResponsiveContainer className="contact-container">
                <ContactSubmenu selected={slug} />
                <div className="contact-wrapper">
                <h1>{getTitleOfSlug(slug !== undefined ? slug : "us")}</h1>
                {getPageOfSlug(slug !== undefined ? slug : "us")}
                </div>
                
            </ResponsiveContainer>
            <Footer/>
        </>
    )
}
