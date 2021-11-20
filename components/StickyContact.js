import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated} from 'react-spring'
import ContactForm from '../components/ContactForm'
import useWindowDimensions from '../components/utilities/useWindowDimensions'
export default function StickyContact() {


    const [isActive, setActive] = useState(false) // 0: Inactive, 1: Active-open , 2: Active-close
    const {isMobile, height, width} = useWindowDimensions()

    let anim_width = isMobile ? (width)/16-2.5 + "rem" : "25rem"
    const props = useSpring({height: isActive ? isMobile ? 0.8*height/16 + "rem" : 0.8*height/16 + "rem" : "4rem", width: isActive ? anim_width : "4rem", borderRadius: isActive ? "40px" : "100px", from: { width: "4rem", height: "4rem", borderRadius: "100px" }, 
    delay: (key) => {
        if(isActive && (key === "height" || key === "borderRadius")){
            return 600;
        }
        else if(!isActive && key === "width" ){
            return 1200
        }
        else if(!isActive && (key === "height" || key === "borderRadius" )){
            return 600
        }
        else{
            return 0;
        }
    }
    });
    
    const hide_show = useSpring({opacity: isActive ? 1 : 0, from: { opacity: 0 }, delay: isActive ? 1200 : 0});

    return (
        <div className="sticky-contact">
            <animated.div style={props} className="sticky-contact--rect">
                <div onClick={() => setActive(prev => !prev)} className="sticky-contact--circle">
                    {isActive && <FontAwesomeIcon icon={faTimes}/> || <FontAwesomeIcon icon={faPaperPlane}/>}
                </div>
                <animated.div className={"sticky-form-container "} style={hide_show}>
                    <ContactForm/>
                </animated.div>
            </animated.div>
            
        </div>
    )
}
