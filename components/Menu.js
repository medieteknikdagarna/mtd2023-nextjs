import React, { useContext, useEffect, useState } from 'react'
import  MTDSvg from '../public/images/mtd_white.svg'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import CloseIcon from '../public/images/close_icon.svg'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { languageContext } from '../pages/_app'
import LanguageFlag from './LanguageFlag'
import Link from 'next/link'

export default function Menu({onExit,style,className}) {

    const [lang, setLang] = useContext(languageContext)
    const [subMenuActive, setSubMenuActive] = useState(false);

    useEffect(() => { //Prevent from scrolling while in menu
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'unset';
     }, []);

     

    return (
        <div style={style} className={"menu-container " + className}>
        <div className={"star-container"}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
                <div className="close-icon">
                    <i onClick={onExit}><CloseIcon className="exit-popup-icon"/></i>
                </div>
                <MTDSvg/>
                <h2>MTD2022</h2>
            </div>
        <div className="menu">
            <ul className="menu--ul">
                <li><Link onClick={onExit} href="/">Hem</Link></li>
                <li>
                    <a style={{cursor: "pointer"}} className={subMenuActive ? "menu-chevron--active" : "menu-chevron--inactive"} onClick={() => setSubMenuActive(prev => !prev)}>Kontakt<FontAwesomeIcon style={{marginLeft: "0.5rem", marginRight: "-1.5rem", fontSize: "1.5rem"}} icon={faChevronDown}/></a>
                    <ul className={subMenuActive ? "sub-menu--active" : "sub-menu--inactive"}>
                        <li className="sub-menu-link"><Link onClick={onExit} href="/contact/us">Kontakt</Link></li>
                        <li className="sub-menu-link"><Link onClick={onExit} href="/contact/the-group">Gruppen</Link></li>
                        <li className="sub-menu-link"><Link onClick={onExit} href="/contact/press-and-media">Press & media</Link></li>
                    </ul>
                </li>
                <li><Link onClick={onExit} href="/fair">Mässan</Link></li>
                <li><Link onClick={onExit} href="/book">Platsbokaren</Link></li>
            </ul>
            <div className="icons-menu">
                <LanguageFlag/>
                <div className="icons-menu--links">
                <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faFacebook}/></a>
                <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faInstagram}/></a>
                <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faLinkedin}/></a>
                <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faYoutube}/></a>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
