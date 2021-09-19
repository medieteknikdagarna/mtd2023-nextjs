import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactSubmenu from '../../components/ContactSubmenu'
import ContactUs from '../../components/ContactUs.js'
import PressAndMedia from '../../components/PressAndMedia'
import { useRouter } from 'next/router'
import TheGroup from '../../components/TheGroup'



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
    
    return (
        <>
            <Header changeOnScroll/>
            <div className="contact-page">
                <ContactSubmenu selected={slug} />
                {getPageOfSlug(slug !== undefined ? slug : "us")}
            </div>
            <Footer/>
        </>
    )
}
