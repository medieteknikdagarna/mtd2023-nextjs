
import Header from '../components/Header'
import MTDSvg from '../public/images/mtd.svg'
import ExpoSmall from '../public/images//expo_small.svg'

import Button from '../components/Button'

import AboutInfo from '../components/AboutInfo'
import Img1 from "../public/images/masonry-imgs/img1.jpg"
import Img2 from "../public/images/masonry-imgs/img2.jpg"
import Img3 from "../public/images/masonry-imgs/img3.jpg"
import Img4 from "../public/images/masonry-imgs/img4.jpg"
import Img5 from "../public/images/masonry-imgs/img5.jpg"
import Img6 from "../public/images/masonry-imgs/img6.jpg"
import Img7 from "../public/images/masonry-imgs/img7.jpg"
import Img8 from "../public/images/masonry-imgs/img8.jpg"
import Img9 from "../public/images/masonry-imgs/img9.jpg"
import Img10 from "../public/images/masonry-imgs/img10.jpg"
import Img11 from "../public/images/masonry-imgs/img11.jpg"
import Img12 from "../public/images/masonry-imgs/img12.jpg"
import Img13 from "../public/images/masonry-imgs/img13.jpg"
import Img14 from "../public/images/masonry-imgs/img14.jpg"
import Img15 from "../public/images/masonry-imgs/img15.jpg"
import Img16 from "../public/images/masonry-imgs/img16.jpg"
import Img17 from "../public/images/masonry-imgs/img17.jpg"
import Img18 from "../public/images/masonry-imgs/img18.jpg"
import Img19 from "../public/images/masonry-imgs/img19.jpg"
import Img20 from "../public/images/masonry-imgs/img20.jpg"
import Img21 from "../public/images/masonry-imgs/img21.jpg"

import Footer from '../components/Footer'

export default function About() {

    const images = [<img src={Img1}></img>,<img src={Img2}></img>,<img src={Img3}></img>,<img src={Img4}></img>,<img src={Img5}></img>,<img src={Img6}></img>,<img src={Img7}></img>,<img src={Img8}></img>,<img src={Img9}></img>,<img src={Img10}></img>,<img src={Img11}></img>,<img src={Img12}></img>,<img src={Img13}></img>,<img src={Img14}></img>,<img src={Img15}></img>,<img src={Img16}></img>,<img src={Img17}></img>,<img src={Img18}></img>,<img src={Img19}></img>,<img src={Img20}></img>,<img src={Img21}></img>]

    
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
