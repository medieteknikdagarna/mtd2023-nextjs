import React from 'react'
import { faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button'
import useWindowDimensions from './utilities/useWindowDimensions'
import ResponsiveContainer from './ResponsiveContainer'
import PodiumSVG from '../public/images/podium.svg'
import ShakeSVG from '../public/images/shake_hand.svg'
export default function InfoWithStars() {

    const {width} = useWindowDimensions()
    return (

            <ResponsiveContainer className="info-with-icons">
                    <div className="icons-info">
                        <div className="icons-info--column">
                            <div className="icons-info--icon">
                                <PodiumSVG/>
                            </div>
                            <div>
                                <h4>Bli inspirerad</h4> 
                                <p>Inspirerande och spännande föreläsningar har varit ett stående inslag på MTD de senaste åren.</p>
                            </div>
                        </div>
                        <div className="icons-info--column">
                            <div className="icons-info--icon">
                                <ShakeSVG/>
                            </div>
                            <div>
                                <h4>Knyt kontakter</h4> 
                                <p>Vi förenar studenter med företag och företag med studenter. En utmärkt chans för alla att knyta kontakter inför framtiden.</p>
                            </div>
                        </div>
                    </div>
                    <div className="icons-button">
                    </div>
            </ResponsiveContainer>
    )
}
