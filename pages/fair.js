
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
import ResponsiveContainer from '../components/ResponsiveContainer'
import ImageGallery from 'react-image-gallery';
import LoadingSpinner from '../components/LoadingSpinner'
import MTDHand from '../public/images/MTD_hand.png'
import Carousel from '../components/Carousel'
import Dan from '../public/images/dan.png'
import Lecturer from '../components/Lecturer'

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }

export default function About() {

    const {data, loading, error} = useFetch("/api/content/fair")
    const [lang, setLang] = useContext(languageContext)
    const images = importAll(require.context('../public/images/masonry-imgs', false, /\.(png|jpe?g|svg)$/));
    console.log(images.length)
    let imgs = []

    for(var key in images){
        imgs.push({
            original: images[key].default.src,
            thumbnail: images[key].default.src
    })
    }
    
    return (
        <>
            <Header changeOnScroll lightContrast/>
            {!data && <LoadingSpinner/> ||
                <>
                        <div className="about-page" >
                            <ResponsiveContainer className="about-page--first-section">
                                <div className="about-section">
                                    <div className="about-section--message">
                                        <h1>{data && data[lang].title}</h1>
                                        <p>{data && data[lang].ingress}</p>
                                        <Button style={{borderColor: "var(--color-primary)", color: "var(--color-light)"}} type="secondary">Kontakta oss</Button>
                                    </div>
                                    {/* <ExpoSmall/> */}
                                </div>
                            </ResponsiveContainer>

                            <ResponsiveContainer>
                            <TheFair/>
                            </ResponsiveContainer>

                            <ResponsiveContainer>
                                <AboutInfo/>
                            </ResponsiveContainer>
                            
                                
                            <ResponsiveContainer className="fair-container--lecturers">
                                <div className="lecturers--infosection">
                                    <InfoSection tag="TIDIGARE ÅR" title="Föreläsningar" body="Varje år håller flera företag spännande föreläsningar ny spännande teknik inom en rad olika ämnen. Håll utkik på hemsidan och våra sociala medier för att inte missa dessa! Nedan hittar du några exempel på föreläsningar som kan hållas under MTD." />
                                </div>
                                <Carousel items={[<Lecturer tag="VFX" name="Jakob Karlstrand" imgSrc={Dan.src} body="Dan kommer att prata om hur hans karriär tog fart ut i världen direkt efter studietiden och hur det är att jobba på stora VFX och animation studios så som MPC i London, Pixar i San Francisco och Goodbye Kansas i Stockholm. Dan kommer också ge en inblick i hur det var att jobba på Coco på Pixar som vann en Oscar för bästa animerade film och hur det är att jobba med VFX i Sverige idag."/>,<Lecturer tag="VFX" name="Dan Englesson" imgSrc={Dan.src} body="Dan kommer att prata om hur hans karriär tog fart ut i världen direkt efter studietiden och hur det är att jobba på stora VFX och animation studios så som MPC i London, Pixar i San Francisco och Goodbye Kansas i Stockholm. Dan kommer också ge en inblick i hur det var att jobba på Coco på Pixar som vann en Oscar för bästa animerade film och hur det är att jobba med VFX i Sverige idag."/>]}/>

                                <h2>PALCEHOLDER</h2>
                            </ResponsiveContainer>
                        </div>
                        
                        <Footer style={{marginTop: 0}}/>
                    </>
        }
        </>
    )
}
