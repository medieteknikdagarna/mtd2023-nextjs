import React, { useContext } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

import ExpoSvg from '../public/images/expo_cube.svg'
import StandSvg from '../public/images/stand.svg'
import InfoSection from '../components/InfoSection'
import AfterMovie from '../components/AfterMovie'
import Footer from '../components/Footer'
import InfoWithStars from '../components/InfoWithIcons'

import { languageContext } from './_app'
import ResponsiveContainer from '../components/ResponsiveContainer'
const content = require("../public/content/landing.json")


export default function LandingPage() {
    const [lang, setLang] = useContext(languageContext);
    
    const fbVideoUrl = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmedieteknikdagen%2Fvideos%2F1399763803536580%2F&show_text=false&width=560&t=0";
    return (
        <>
        <Header lightContrast changeOnScroll/>
             <div className="video-container">
                <video id="background-video" autoPlay loop muted>
                 <source src={require("../public/images/cube_storm.mp4")} type="video/mp4"/>
                </video>
                <ResponsiveContainer className="landing-container">
                
                    <section className="landing-section">
                        <div className="intro">
                            <h1>MTD2022</h1>
                            <div className="welcome">
                                <p>{content[lang].section1.body[0] }<br/>{ content[lang].section1.body[1]}</p>
                                <div className="landing-section--buttons">
                                    <Button href="/register" type="primary" size="large">{ lang === "sv" ? "Intresseanmälan" : "Registration"}</Button> 
                                    <Button href="/fair" style={{borderColor: "var(--color-light)", color: "var(--color-light)"}} type="secondary" size="large">{lang === "sv" ? "Om mässan" : "About"}</Button> 
                                </div>
                            </div>
                        </div>
                    </section>
                </ResponsiveContainer>
               
            </div>
            <ResponsiveContainer>
                <section className="welcome-section">
                    <InfoSection 
                    className="welcome-info" tag="MTD2022" title={lang === "sv" ? "Välkommen!" : "Welcome!"} body={content[lang].section2.body}>
                        <Button href="/fair" type="primary" size="medium">{lang === "sv" ? "Läs mer" : "Read more"}</Button>
                    </InfoSection>
                    <div className="calendar">
                    <ExpoSvg/>
                    </div>
                </section>
            </ResponsiveContainer>

            <ResponsiveContainer>
                <section className="booking-section">
                    <div className="stand">
                        <StandSvg/>
                    </div>
                    <InfoSection className="partner-info" tag={lang === "sv" ? "Säkra en plats" : "Secure your spot"} title={lang === "sv" ? "Bli partner" : "Join us"} body={content[lang].section3.body}>
                        <Button href="/register" type="primary" size="medium">{lang === "sv" ? "Intresseanmälan" : "Registration"}</Button>
                        <Button href="/fair" type="secondary" size="medium">{lang === "sv" ? "Om mässan" : "About fair"}</Button>
                    </InfoSection> 
                </section>
            </ResponsiveContainer>

            <InfoWithStars/>
            <ResponsiveContainer>
                <section className="after-movie-section">
                    <div className="after-movie-title">
                        <InfoSection className="after-movie" tag={lang === "sv" ? "Tidigare år" : "PREVIOUS YEARS"} title="After movie 2020" body={content[lang].section5.body}/>
                    </div>
                    <AfterMovie src={fbVideoUrl}/>
                </section>
            </ResponsiveContainer>  
            <Footer/>
        </>
    )

}