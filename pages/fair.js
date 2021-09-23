
import Header from '../components/Header'
import MTDSvg from '../public/images/mtd.svg'
import ExpoSmall from '../public/images//expo_small.svg'
import InfoSection from '../components/InfoSection'
import Button from '../components/Button'
import useFetch from '../components/utilities/useFetch'
import AboutInfo from '../components/AboutInfo'
import { languageContext } from './_app'
import Fallback from '../components/utilities/Fallback'
import Footer from '../components/Footer'
import { useContext } from 'react'
import Lecturers from '../components/Lecturers'
import TheFair from '../components/TheFair'

export default function About() {

    const {data, loading, error} = useFetch("/api/content/fair")
    const [lang, setLang] = useContext(languageContext)

    
    return (
        <Fallback loading={loading}>
        <Header changeOnScroll lightContrast/>
        <div className="star-bg">
            <div style={{overflow: "hidden", position: "fixed"}} id="stars"></div>
            <div style={{overflow: "hidden", position: "fixed"}} id="stars2"></div>
            <div style={{overflow: "hidden", position: "fixed"}} id="stars3"></div>
        
        <div className="rest-of-the-page">
            
            <div className="about-page">
                <section className="about-section">
                    <div className="about-section--message">
                        <h1>{data && data[lang].title}</h1>
                        <p>{data && data[lang].ingress}</p>
                        <Button style={{borderColor: "var(--color-primary)", color: "var(--color-light)"}} type="secondary">Kontakta oss</Button>
                    </div>
                        <ExpoSmall/>
                
                </section>
                <section className="about-info-section">
                    <AboutInfo/>
                    
                </section>
                <section className="fair-section">
                   <TheFair/>
                </section>

                <section className="lecturers-section">
                    <div className="lecturers-section--container">
                        <div className="lecturers--infosection">
                            <InfoSection tag="TIDIGARE ÅR" title="Föreläsningar" body="Varje år håller flera företag spännande föreläsningar ny spännande teknik inom en rad olika ämnen. Håll utkik på hemsidan och våra sociala medier för att inte missa dessa! Nedan hittar du några exempel på föreläsningar som kan hållas under MTD." />
                        </div>
                        <div className="lecturers-container">
                            <Lecturers/>
                        </div>
                    </div>
                </section>
            </div>
            
            <Footer style={{marginTop: 0}}/>
        </div>
        </div>
        </Fallback>
    )
}
