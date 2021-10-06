import React, { useContext } from 'react'
import { languageContext } from '../pages/_app'
import MTDSvg from '../public/images/mtd.svg'
import MTSvg from '../public/images/mt_logo.svg'
const content = require("../public/content/fair.json")
export default function AboutInfo() {

    const [lang, setLang] = useContext(languageContext)

    return (
        <div className="about-info">
            <div className="about-info--mtd">
                <div className="about-info--img-container">
                    <MTDSvg/>
                </div>
                <div>
                    <h3>{content[lang].about_info.title1}</h3>
                    {content[lang].about_info.body1.map((t,i)=> <p key={i}>{t}</p>)}
                </div>
            </div>
            <div className="about-info--mt">
                <div className="about-info--img-container">
                    <MTSvg/>
                </div>
                <div>
                    <h3>{content[lang].about_info.title2}</h3>
                    {content[lang].about_info.body2.map((t,i)=> <p key={i}>{t}</p>)}
                </div>
            </div>
        </div>
    )
}
