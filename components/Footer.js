import React, { useState } from 'react'
import MTDSvg from '../public/images/mtd_white.svg'
import MTSvg from '../public/images/logo_white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Footer(props) {

    const [copied, setCopied] = useState(false);

    const handleCopy = () =>{
        setCopied(true);
        navigator.clipboard.writeText("projektledare@medieteknikdagen.se")
    }

    return (
        <>
        
        <div className="footer">
        <div className="footer--bar"></div>
        <div className="footer--content">
            <div className="footer--images">
                <MTDSvg/>
                <MTSvg/>
            </div>
            <div className="footer--info">
                <span>Medieteknikdagarna arrangeras av Medietekniksektionen vid Linköpings Universitet.</span>
                <span><a href="#">Detta är ett projekt med öppen källkod</a><br/><a href="#">Intigritetspolicy</a></span>
            </div>
            <div className="footer-contact">
                <h3>Email</h3>
                <div className="footer--bar2"></div>
                <div className="email-button-container">
                    <div onClick={handleCopy} className={copied ? "footer--copied" : "footer--not-copied" }>
                        {!copied && <div><FontAwesomeIcon icon={faLink}/></div>}
                        {copied && <div><FontAwesomeIcon icon={faCheck}/></div>}
                        <div><span>{copied ? "Kopierad!" : "projektledare@medieteknikdagen.se"}</span></div>
                    </div>
                </div>
                <div className="footer--icons">
                    <a className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faFacebook}/></a>
                    <a className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faInstagram}/></a>
                    <a className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faLinkedin}/></a>
                    <a className="footer--icon-link"><FontAwesomeIcon className="brand-icons" icon={faYoutube}/></a>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}
