import React, { useContext, useEffect, useState } from 'react'
import ResponsiveContainer from './ResponsiveContainer'
import Button from './Button'
import Link from 'next/dist/client/link'
import {useTransition, animated,config} from 'react-spring'
import { languageContext } from '../pages/_app'
const content = require("../public/content/cookies.json")
export default function AcceptPolicy() {

    const [lang, setLang] = useContext(languageContext)

    const [hasAccepted, setAccepted] = useState(true)
    const transitions = useTransition(!hasAccepted, {
        from: { y: 200, transform: "translateX(-50%)" },
        enter: { y: 0,transform: "translateX(-50%)" },
        leave: { y: 200,transform: "translateX(-50%)" },
      })

    const setPreferences = () =>{
        localStorage.setItem("hasAcceptedCookies", true)
        setAccepted(true)
    }
    
    useEffect(() => {
        if(localStorage.getItem("hasAcceptedCookies")){
            setAccepted(true)
        }
        else{
            setAccepted(false)
        }

    }, [])

    return (<>{transitions((styles, item) => item && 
    <animated.div className="accept-policy" style={styles}>
        <div className="accept-wrapper">
            <span>{content[lang].text}  <Link href="/policy"><a>{content[lang].link}</a></Link></span>
        </div>
        <Button onClick={setPreferences} type="primary" size="medium">{lang == "sv" ? "Acceptera" : "Accept"}</Button>
    </animated.div>)
            }</>
    )
}
