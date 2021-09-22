import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Confetti from 'react-dom-confetti';
import Table from '../public/images/table.svg'
import Stairs from '../public/images/stairs.svg'

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
                
                <h1>{`Tack ${name}, för din reservation`}!</h1>
                <Confetti config={config} active={shouldExlpode}/>
                <p>Du har nu reserverat följande plats:</p>
                <div className="reservation--seat-info">
                    <span><Table />Plats <b>{seat}</b></span>
                    <span><Stairs/>Plan <b>{floor}</b></span>
                </div>
                <br/>
                    <p className="reservation-success--welcome">Vi önskar dig och resten av <b>{company}</b> varmt välkomna till Medieteknikdagen 2022!</p>
                    <p className="reservation-success--email">Kolla i din inkorg för ett bekräftelsemail. Vi kommer även att kontakta dig per telefon alternativt email inom 24h</p>
            </div>
        </section>
    )
}
