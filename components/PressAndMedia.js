import React, { useContext } from 'react'
import { languageContext } from '../pages/_app'
import DownloadButton from './DownloadButton'
const content = require("../public/content/contact-press.json")
export default function PressAndMedia() {
    const [lang, setLang] = useContext(languageContext)
    return (
        <div className="press-and-media-section">
            <div className="press-info">    
                <p>Representerar du press eller övrig media och är lite nyfiken på MTD? Här hittar du en kort sammanfattning om vad Mediekteknikdagen är.</p>
                <h3>{content[lang].title}</h3>
                {content[lang].info_body.map(t => <p>{t}</p>)}

            </div>
            <div className="press-contact">
                <div className="press-contact--outline">
                    <h2>{content[lang].card.title1}</h2>
                    <h4>Daniel Wärulf</h4>
                    
                    <a href="email:daniel.warulf@medieteknikdagen.se">daniel.warulf@medieteknikdagen.se</a><br/>
                    <a href="tel:0723525617">+46 723 52 56 17</a>
                    <div className="press--downloads">
                        <h3>{content[lang].card.title2}</h3>
                        <span className="download-tag">{content[lang].card.webb}</span>
                        <DownloadButton link={""}/>
                        <span className="download-tag">{content[lang].card.tryck}</span>
                        <DownloadButton link={""}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
