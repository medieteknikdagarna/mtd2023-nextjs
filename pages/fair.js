
import Header from '../components/Header'
import MTDSvg from '../public/images/mtd.svg'
import ExpoSmall from '../public/images//expo_small.svg'

import Button from '../components/Button'

import AboutInfo from '../components/AboutInfo'


import Footer from '../components/Footer'

export default function About() {
    
    return (
        <>
            <Header changeOnScroll lightContrast/>
            <div className="about-page">
                <section className="about-section">
                    <div className="about-section--message">
                        <h1>Vad är MTD2022?</h1>
                        <p>Medieteknikdagen är en arbetsmarknadsdag för medieteknikprogrammet på Linköpings universitet. För tjugoandra året i rad förenar vi hundratals studenter och företag i industrin. Här hittar du all information och alla kontaktuppgifter du kan tänkas behöva</p>
                        <Button style={{borderColor: "var(--color-primary)", color: "var(--color-light)"}} type="secondary">Kontakta oss</Button>
                    </div>
                        <ExpoSmall/>
                
                </section>
                <section className="about-info-section">
                    <AboutInfo/>
                    
                </section>
                <section className="lecturers-section">
                    <h2>in progress</h2>
                    <h2>in progress</h2>
                    <h2>in progress</h2>
                    <h2>in progress</h2>
                    <h2>in progress</h2>
                </section>
                
            </div>
            <Footer style={{marginTop: 0}}/>
            
            
        </>
    )
}
