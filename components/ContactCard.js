import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCopy, faLink } from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import {animated,useTransition} from 'react-spring'


function ClipboardButton({textToCopy}){

    const [copied, setCopied] = useState(false)

    const transitions = useTransition(copied, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })

    const handleFocus = (event) =>{

        event.target.select();
        navigator.clipboard.writeText(textToCopy)
            setCopied(true)
            setInterval(() => {
                setCopied(false)
            }, 1500);
        
        
    }
    
    const chLength = textToCopy.length + "ch"
    return(
        <div className="clipboard-button">
            {transitions((styles, item) => item && <animated.div key={item.key} className="tool-tip" style={styles}>Kopierad! ✌️</animated.div>) }
            <div className="clipboard-container">
                <div className="clipboard-button--icon">
                    <i><FontAwesomeIcon icon={faCopy}/></i>
                </div>
                <input style={{width: chLength}} onFocus={handleFocus} type="text" defaultValue={textToCopy}></input>
            </div>
            
        </div>
    )
}

export default function ContactCard({title, body, textToCopy}) {
    return (
        <div className="contact-card">
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <ClipboardButton textToCopy={textToCopy}/>
        </div>
    )
}