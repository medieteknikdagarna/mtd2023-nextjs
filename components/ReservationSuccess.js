import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Confetti from 'react-dom-confetti';
import Table from '../public/images/table.svg'
import Stairs from '../public/images/stairs.svg'
import Expo from '../public/images/expo_small.svg'

export default function ReservationSuccess({seat, floor, name,company}) {

    const [shouldExlpode, setExplode] = useState(false)

    const config = {
        angle: "90",
        spread: "203",
        startVelocity: 40,
        elementCount: "99",
        dragFriction: "0.07",
        duration: 3000,
        stagger: "5",
        width: "15px",
        height: "14px",
        perspective: "1000px",
        colors: ["#FF984A", "#3B4850 ", "#FFF5EE"]
      };


    useEffect(() => {
        setTimeout(() => {
            setExplode(true)
        }, 100);
    }, [])

    return (
        <section className="reservation-section">
            <div className="reservation-success">
                <Confetti config={config} active={shouldExlpode}/>
                <div className="thank-you">
                    <div>
                        <h2>Wohoo!</h2>
                        <p>{`Tack ${name}, för din intresseanmälan!`}</p>
                        <p>Vi kommer att höra av oss så fort vi kan, där vi berättar mer detaljerat om de olika partnerpaket, priser, förmåner vi erbjuder!</p>
                        <p className="reservation-success--welcome">Vi önskar dig och resten av <b>{company}</b> varmt välkomna till Medieteknikdagen 2022!</p>
                    </div>
                    <Expo/>
                </div>
            </div>
        </section>
    )
}
