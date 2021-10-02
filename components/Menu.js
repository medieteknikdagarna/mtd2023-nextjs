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
import { useTransition,animated } from 'react-spring'
import {useRouter} from 'next/router'
import Button from './Button'

export default function Menu({onExit,style,className, show}) {

    const [lang, setLang] = useContext(languageContext)
    const [subMenuActive, setSubMenuActive] = useState(true);

    const transitions = useTransition(show, {
        from: { x: 800, opacity: 1 },
        enter: { x: 0,opacity: 1 },
        leave: { x: 800,opacity: 1 },
        delay: 200
      })

    const router = useRouter()
    console.log(router.asPath)
    
    return (
        <>

        <div style={style} className={show ? "menu-container menu-container--active" : "menu-container menu-container--inactive"}>
        {transitions((styles, item) => {
            return (item && 
            <>
            <div onClick={onExit} className="escape-div"></div>
            <animated.div style={styles} className="menu">
            <div className="close-icon">
                    <i onClick={onExit}><CloseIcon className="exit-popup-icon"/></i>
            </div>
            <ul className="menu--ul">
                <li className={router.asPath === "/" ? "selected-page" : ""}><Link onClick={onExit} href="/">Hem</Link></li>
                
                <li>
                    <a style={{cursor: "pointer"}} className={subMenuActive ? "menu-chevron--active" : "menu-chevron--inactive"} onClick={() => setSubMenuActive(prev => !prev)}>Kontakt<FontAwesomeIcon style={{marginLeft: "0.5rem", marginRight: "-1.5rem", fontSize: "1.5rem"}} icon={faChevronDown}/></a>
                    <ul className={subMenuActive ? "sub-menu--active" : "sub-menu--inactive"}>
                        <li className={router.asPath === "/contact/us" ? "selected-page sub-menu-link" : "sub-menu-link"}><Link onClick={onExit} href="/contact/us">Kontakt</Link></li>
                        <li className={router.asPath === "/contact/the-group" ? "sub-menu-link selected-page" : "sub-menu-link"}><Link onClick={onExit} href="/contact/the-group">Gruppen</Link></li>
                        <li className={router.asPath === "/contact/press-and-media" ? "selected-page sub-menu-link" : "sub-menu-link"}><Link onClick={onExit} href="/contact/press-and-media">Press & media</Link></li>
                    </ul>
                </li>
                <li className={router.asPath === "/fair" ? "selected-page" : ""}><Link onClick={onExit} href="/fair">Mässan</Link></li>
                <li className={router.asPath === "/register" ? "selected-page" : ""} ><Link onClick={onExit} href="/register">Intresseanmälan</Link></li>
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
        </animated.div>
        </>
            
        )})}

        </div> 
        </>
    )
}
