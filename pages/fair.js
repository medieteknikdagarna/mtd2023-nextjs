
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import Button from '../components/Button'
import useFetch from '../components/utilities/useFetch'
import AboutInfo from '../components/AboutInfo'
import { languageContext } from './_app'
import Footer from '../components/Footer'
import { useContext, useEffect, useState } from 'react'
import TheFair from '../components/TheFair'
import ResponsiveContainer from '../components/ResponsiveContainer'
import LoadingSpinner from '../components/LoadingSpinner'
import Carousel from '../components/Carousel'
import Gallery from '../components/Gallery'
const content = require("../public/content/fair.json")
import { NextSeo } from 'next-seo'
export function importAll(r) {
    let images = [];
    if(!r){
        return
    }
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }

export default function About() {

    const {data, loading, error} = useFetch("/api/content/fair")
    const [lang, setLang] = useContext(languageContext)
    //const images = importAll(require.context('../public/images/masonry-imgs', false, /\.(png|jpe?g|svg)$/));
    let imgs = []
    
    return (
        <div className="fair-background">
        <NextSeo title={lang === "sv" ? "Mässa" : "Fair"} 
        description="Säkra din plats på mediteteknikstudenternas årliga arbetsmarknadsdag Medieteknikdagen! Få chansen att träffa hundratals civilingenjörsstudenter och exponera erat företag."
        canonical="https://www.medieteknikdagen.se/fair"
        />
            <Header changeOnScroll lightContrast/>
            {!data && <LoadingSpinner/> ||
                <>
                        <div className="about-page" >
                            <ResponsiveContainer className="about-page--first-section">
                                <div className="about-section">
                                    <div className="about-section--message">
                                        <h1>{data && data[lang].title}</h1>
                                        <p>{data && data[lang].ingress}</p>
                                        <Button href="/contact/us" type="primary">{lang === "sv" ? "Kontakta oss" : "Contact us"}</Button>
                                    </div>
                                </div>
                            </ResponsiveContainer>

                            <ResponsiveContainer>
                            <TheFair/>
                            </ResponsiveContainer>

                            <ResponsiveContainer className="fair-responsive">
                                <AboutInfo/>
                            </ResponsiveContainer>

                            <ResponsiveContainer>
                                <Gallery/>
                            </ResponsiveContainer>
                            
                            <ResponsiveContainer className="fair-container--lecturers">
                                <div className="fair-container--lecturers--div">
                                <InfoSection tag={lang === "sv" ? "Tidigare år" : "Previous years"} title={content[lang].lecturer.title} body={content[lang].lecturer.body} />
                                </div>
                                <Carousel/>

                            </ResponsiveContainer>
                        </div>
                        
                        <Footer style={{marginTop: 0}}/>
                    </>
        }
        </div>
    )
}
