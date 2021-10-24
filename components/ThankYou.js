import React, { useContext } from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../public/animation_success.json'
import { languageContext } from '../pages/_app';
const content = require("../public/content/thankyou.json")
export default function ThankYou() {

  const [lang, setLang] = useContext(languageContext)

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="thank-you-container">
        <h3>{content[lang].title}</h3>
        <p>{content[lang].body}</p>
        <Lottie options={defaultOptions}
                        />
        </div>
    )
}
