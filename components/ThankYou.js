import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'react-lottie';
import * as animationData from '../public/animation_success.json'
export default function ThankYou() {

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
        <h3>Tack!</h3>
        <p>Tack för ditt meddelande! Vi återkommer till er så fort som möjligt!</p>
        <Lottie options={defaultOptions}
                        />
        </div>
    )
}
