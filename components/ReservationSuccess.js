import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function ReservationSuccess({seat, floor}) {
    return (
        <div className="reservation-success">
            <h1>Tack för din reservation!</h1>
            <p>Du har nu reserverat följande plats:</p>
            <div>
                <span><FontAwesomeIcon icon={faCheckCircle}/>Plats <b>{seat}</b></span>
                <span><FontAwesomeIcon icon={faCheckCircle}/>Plan <b>{5}</b></span>
            </div>

            <p>Kolla i din inkorg för ett bekräftelsemail. Vi kommer även att kontakta dig per telefon alternativt email inom 24h</p>
        </div>
    )
}
