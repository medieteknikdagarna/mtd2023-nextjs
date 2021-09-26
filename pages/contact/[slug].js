import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactSubmenu from '../../components/ContactSubmenu'
import ContactUs from '../../components/ContactUs.js'
import PressAndMedia from '../../components/PressAndMedia'
import { useRouter } from 'next/router'
import TheGroup from '../../components/TheGroup'
import ResponsiveContainer from '../../components/ResponsiveContainer'



export default function ContactPage() {

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
            return "Gruppen"
        }
        else if (s.toLowerCase() === "press-and-media"){
            return "Press & media"
        }
        else{
            return "Kontakta oss"
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
