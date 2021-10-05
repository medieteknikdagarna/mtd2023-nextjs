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
                                <p>Expand your brand awereness, meet with students and companys. Secure your spot at the annual convention of Media Technology days</p>
                                <div className="landing-section--buttons">
                                    <Button href="/register" type="primary" size="large">Intresseanmälan</Button> 
                                    <Button href="/fair" style={{borderColor: "var(--color-light)", color: "var(--color-light)"}} type="secondary" size="large">Om mässan</Button> 
                                </div>
                            </div>
                        </div>
                    </section>
                </ResponsiveContainer>
               
            </div>
            <ResponsiveContainer>
                <section className="welcome-section">
                    <InfoSection className="welcome-info" tag="MTD2022" title="Välkomna!" body="Medieteknikdagen är en arbetsmarknadsdag för medieteknikprogrammet på Linköpings universitet. För tjugoandra året i rad förenar vi hundratals studenter och företag i industrin. Här hittar du all information och alla kontaktuppgifter du kan tänkas behöva." buttonText="Läs mer">
                        <Button href="/fair" type="primary" size="medium">Läs mer</Button>
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
                    <InfoSection className="partner-info" tag="SÄKRA EN PLATS" title="Bli partner" body="Exponera ert företag med medieteknikdagarna och nå ut till en uppsjö av blivande civilingenjörer.Säkra en plats för ditt företag redan idag! Med Platsbokaren kan du se en karta över alla möjliga platser på mässan.">
                        <Button href="/register" type="primary" size="medium">Intresseanmälan</Button>
                        <Button href="/fair" type="secondary" size="medium">Om mässan</Button>
                    </InfoSection> 
                </section>
            </ResponsiveContainer>

            <InfoWithStars/>
            <ResponsiveContainer>
                <section className="after-movie-section">
                    <div className="after-movie-title">
                        <InfoSection className="after-movie" tag="TIDIGARE ÅR" title="After movie 2020" body="I fjol hölls mässan digitalt via Graduateland. I år kommer vi att hålla den på plats. Kolla på filmen nedan för att få en inblick i hur det kan se ut under Medieteknikdagarna! "/>
                    </div>
                    <AfterMovie src={fbVideoUrl}/>
                </section>
            </ResponsiveContainer>  
            <Footer/>
        </>
    )

}