
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import Button from '../components/Button'
import useFetch from '../components/utilities/useFetch'
import AboutInfo from '../components/AboutInfo'
import { languageContext } from './_app'
import Footer from '../components/Footer'
import { useContext } from 'react'
import TheFair from '../components/TheFair'
import ResponsiveContainer from '../components/ResponsiveContainer'
import LoadingSpinner from '../components/LoadingSpinner'
import Carousel from '../components/Carousel'
import Dan from '../public/images/dan.png'
import Lecturer from '../components/Lecturer'
import AfterMovie from '../components/AfterMovie'

export function importAll(r) {
    let images = [];
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }

export default function About() {

    const {data, loading, error} = useFetch("/api/content/fair")
    const [lang, setLang] = useContext(languageContext)
    //const images = importAll(require.context('../public/images/masonry-imgs', false, /\.(png|jpe?g|svg)$/));
    let imgs = []

    const fbVideoUrl = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmedieteknikdagen%2Fvideos%2F1399763803536580%2F&show_text=false&width=560&t=0";

    
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
                                        <Button type="primary">Kontakta oss</Button>
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
                            <ResponsiveContainer>
                                <section className="after-movie-section">
                                    <div className="after-movie-title">
                                        <InfoSection className="after-movie" tag="TIDIGARE ÅR" title="After movie 2020" body="I fjol hölls mässan digitalt via Graduateland. I år kommer vi att hålla den på plats. Kolla på filmen nedan för att få en inblick i hur det kan se ut under Medieteknikdagarna! "/>
                                    </div>
                                    <AfterMovie src={fbVideoUrl}/>
                                </section>
                            </ResponsiveContainer>
                            
                                
                            <ResponsiveContainer className="fair-container--lecturers">

                                <InfoSection tag="TIDIGARE ÅR" title="Föreläsningar" body="Varje år håller flera företag spännande föreläsningar ny spännande teknik inom en rad olika ämnen. Håll utkik på hemsidan och våra sociala medier för att inte missa dessa! Nedan hittar du några exempel på föreläsningar som kan hållas under MTD." />
                            
                                <Carousel items={[<Lecturer key={1} tag="VFX" name="Jakob Karlstrand" imgSrc={Dan.src} body="Dan kommer att prata om hur hans karriär tog fart ut i världen direkt efter studietiden och hur det är att jobba på stora VFX och animation studios så som MPC i London, Pixar i San Francisco och Goodbye Kansas i Stockholm. Dan kommer också ge en inblick i hur det var att jobba på Coco på Pixar som vann en Oscar för bästa animerade film och hur det är att jobba med VFX i Sverige idag."/>,<Lecturer key={2} tag="VFX" name="Dan Englesson" imgSrc={Dan.src} body="Dan kommer att prata om hur hans karriär tog fart ut i världen direkt efter studietiden och hur det är att jobba på stora VFX och animation studios så som MPC i London, Pixar i San Francisco och Goodbye Kansas i Stockholm. Dan kommer också ge en inblick i hur det var att jobba på Coco på Pixar som vann en Oscar för bästa animerade film och hur det är att jobba med VFX i Sverige idag."/>]}/>

                                <h2>PALCEHOLDER</h2>
                            </ResponsiveContainer>
                        </div>
                        
                        <Footer style={{marginTop: 0}}/>
                    </>
        }
        </>
    )
}
