import React, { useState } from 'react'
import MTDSvg from '../public/images/mtd_white.svg'
import MTSvg from '../public/images/mt_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { ClipboardButton } from './ContactCard'
import Link from 'next/dist/client/link'

export default function Footer(props) {

    const [copied, setCopied] = useState(false);

    const handleCopy = () =>{
        setCopied(true);
        navigator.clipboard.writeText("projektledare@medieteknikdagen.se")
    }

    return (
        <>
        
        <div className="footer">

            <div className="footer-left">
                <div>
                    <div className="footer--images">
                        <MTDSvg/>
                        <MTSvg/>
                    </div>
                    <div className="footer--icons">
                            <a href="https://www.facebook.com/medieteknikdagen" target="_blank" rel="noopener" className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faFacebook}/></a>
                            <a href="https://www.instagram.com/medieteknikdagen/" target="_blank" rel="noopener" className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faInstagram}/></a>
                            <a href="https://www.linkedin.com/company/medieteknikdagarna-2014/" target="_blank" rel="noopener" className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faLinkedin}/></a>
                            <a href="https://www.youtube.com/c/Medieteknikdagen" target="_blank" rel="noopener" className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faYoutube}/></a>
                    </div>
                    </div>
                </div>

            <div className="footer-middle">
                <div>
                    <h4>Open Source</h4>
                    <p>Detta är ett projket med öppen källkod. Ni kan klona eller ladda ned koden via vårt Github-repo.</p>
                    <a href="https://github.com/medieteknikdagarna/mtd2022-frontend-nextjs" target="_blank" rel="noreferrer"><div className="github-button"><FontAwesomeIcon icon={faGithub}/> <span>GitHub</span></div></a>
                </div>
            </div>
            <div className="footer-right">
            <div>
                <h4>Kontakt</h4>
                <ClipboardButton fontColor="var(--color-light)" textToCopy={"info@medietknikdagen.se"}/>
                <h4>GDPR</h4>
                <p>Läs mer om GDPR och vår intigritetspolicy <Link href="/policy"><a>här</a></Link></p>
            </div>
            </div>
        </div>
        <div className="footer--bar">
            <code>OpenSource -  Medieteknikdagen 2022</code>
        </div>
        </>
    )
}
