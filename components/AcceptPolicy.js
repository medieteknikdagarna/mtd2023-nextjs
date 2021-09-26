import React, { useEffect, useState } from 'react'
import ResponsiveContainer from './ResponsiveContainer'
import Button from './Button'
import Link from 'next/dist/client/link'
import {useTransition, animated,config} from 'react-spring'

export default function AcceptPolicy() {

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
        <div>
            <span>Denna sida använder cookies för att göra din upplevelse bättre.</span>
            <Link href="/policy"><a>Läs mer om hur vi använder cookies</a></Link>
        </div>
        <Button onClick={setPreferences} type="primary" size="medium">Acceptera</Button>
    </animated.div>)
            }</>
    )
}
