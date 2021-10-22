import React, { useContext } from 'react'
import { languageContext } from '../pages/_app'
import DownloadButton from './DownloadButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import MemberCard from './MemberCard'
import placeholder from '../public/images/placeholder_1.png'
const content = require("../public/content/contact-press.json")

export default function PressAndMedia() {
    const [lang, setLang] = useContext(languageContext)
    return (
        <div className="press-and-media-section">
            <div className="press-info">    
                <p>{content[lang].short}</p>
                <h3>{content[lang].title}</h3>
                {content[lang].info_body.map((t,i) => <p key={i}>{t}</p>)}
                <h3>{content[lang].card.title2}</h3>
                <div className="press--downloads">
                        
                        <div>
                            <span className="download-tag">{content[lang].card.downloads}</span>
                            <DownloadButton/>
                        </div>
            </div>
            
            </div>
            
            <MemberCard name="Daniel Wärulf" post="PR" email="daniel.warulf@medieteknikdagen.se" phone="+46 730 68 72 11" src={placeholder.src} linkedin={"https://www.linkedin.com/in/daniel-w%C3%A4rulf-591374189/"} />
           
        </div>
    )
}
