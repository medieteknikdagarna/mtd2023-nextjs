import React, { useContext } from 'react'
import InfoSection from './InfoSection'
import Tappan from "../public/images/platsbokaren_no_seats.svg"
import Button from './Button'
import { languageContext } from '../pages/_app'
const content = require("../public/content/fair.json")
export default function TheFair() {
    const [lang, setLang] = useContext(languageContext)

    const handleScroll = () =>{
        document.getElementById('scroll-gallery').scrollIntoView();
    }

    return (
        <div className="the-fair">
        <div>
            <InfoSection tag="MTD2022" title={content[lang].fair.title} body={content[lang].fair.body.map((t,i) => <p key={i}>{t}</p>)}>
                <Button href="/intresseanmalan" type="primary" style={{ marginTop: "1rem"}}>{lang === "sv" ? "Intresseanmälan" : "Register of interest"}</Button>
                <Button onClick={handleScroll} type="secondary" style={{marginTop: "1rem"}}>{lang === "sv" ? "Galleri" : "Gallery"}</Button>
            </InfoSection>    
        </div>
        <Tappan/>
        </div>
    )
}
