import React, { useContext, useEffect, useState } from 'react'
import MTDSvg from '../public/images/mtd.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import Menu from './Menu'
import Link from 'next/link'
import LanguageFlag from './LanguageFlag'
import { useTransition } from '@react-spring/core';

export const menuActiveContext = React.createContext()

export default function Header({changeOnScroll = false, lightContrast}) {

    const className = lightContrast ? "header-light" : "header"

    const [menuActive, setMenuActive] = useState(false);
    
    const [lastscrollPos, setlastScrollPos] = useState(0);

    const transitions = useTransition(menuActive, {
        from: { x: 1000 },
        enter: { x: 0, opacity: 1 },
        leave: { opacity: 0 },
      })

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () =>{
        const pos = window.pageYOffset;

        setlastScrollPos(pos);
        
    }
    

    return (
        <header className={lastscrollPos >= 50 && changeOnScroll ? className.concat(" header-scroll") : className}>
         <menuActiveContext.Provider value={[menuActive, setMenuActive]}>
         {transitions((styles, item) => item && <Menu key={item.key} style={styles}></Menu>) }
        </menuActiveContext.Provider>
        <div className="logo-container">
            <Link href="/"><MTDSvg className="header-logo"/></Link>
            <div className="nav-items">
                <Link href="/"><h2>MTD2022</h2></Link>
                <div className="icons">
                    <LanguageFlag/>
                    <div className="spacer"></div>
                    <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faFacebook}/></a>
                    <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faInstagram}/></a>
                    <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faLinkedin}/></a>
                    <a className="icon-link"><FontAwesomeIcon className="brand-icons" icon={faYoutube}/></a>
                </div>
            </div>
        </div> 
        <div className="menu-icon">
                <i onClick={() => setMenuActive(true)}><FontAwesomeIcon className="menu-icon" icon={faBars}/></i>
        </div> 
    </header>
        
    )
}
