
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

export default function About() {

    const {data, loading, error} = useFetch("/api/content/fair")
    const [lang, setLang] = useContext(languageContext)

    
    return (
        <Fallback loading={loading}>
            <Header changeOnScroll lightContrast/>
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
                <section className="lecturers-section">
                    <InfoSection />
                </section>
            </div>
            <Footer style={{marginTop: 0}}/>
            
        </Fallback>
    )
}
