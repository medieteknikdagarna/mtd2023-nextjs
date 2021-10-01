import React, { useContext } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

import ExpoSvg from '../public/images/expo_mtd.svg'
import InfoSection from '../components/InfoSection'
import Calendar from '../public/images/calendar.svg'
import stand from '../public/images/stand.png'
import Footer from '../components/Footer'
import InfoWithStars from '../components/InfoWithStars'
import AfterMovie from '../components/AfterMovie'
import { languageContext } from './_app'
import useWindowDimensions from '../components/utilities/useWindowDimensions'
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
                                    <Button href="/book" type="primary" size="large">Intresseanmälan</Button> 
                                    <Button style={{borderColor: "var(--color-light)", color: "var(--color-light)"}} href="/book" type="secondary" size="large">Om mässan</Button> 
                                </div>
                            </div>
                        </div>
                            {/* <ExpoSvg/> */}
                    </section>
                </ResponsiveContainer>
                {/* <div className="custom-shape-divider-bottom-1630064993">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>*/} 
            </div>
            <ResponsiveContainer>
                <section className="welcome-section">
                    <InfoSection className="welcome-info" tag="MTD2022" title="Välkomna!" body="Medieteknikdagen är en arbetsmarknadsdag för medieteknikprogrammet på Linköpings universitet. För tjugoandra året i rad förenar vi hundratals studenter och företag i industrin. Här hittar du all information och alla kontaktuppgifter du kan tänkas behöva." buttonText="Läs mer">
                        <Button type="primary" size="medium">Läs mer</Button>
                    </InfoSection>
                    <div className="calendar">
                        <Calendar/>
                    </div>
                </section>
            </ResponsiveContainer>

            <ResponsiveContainer>
                <section className="booking-section">
                    <div className="stand">
                        <img alt="illustration of a stand" src={stand.src}></img>
                    </div>
                    <InfoSection className="partner-info" tag="SÄKRA EN PLATS" title="Bli partner" body="Exponera ert företag med medieteknikdagarna och nå ut till en uppsjö av blivande civilingenjörer.Säkra en plats för ditt företag redan idag! Med Platsbokaren kan du se en karta över alla möjliga platser på mässan.">
                        <Button type="primary" size="medium">Intresseanmälan</Button>
                        <Button type="secondary" size="medium">Om mässan</Button>
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