
import { faPaperPlane, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useRef, useContext } from 'react'
import Button from './Button'
import ResponsiveContainer from './ResponsiveContainer'
import Link from 'next/link'
import ReservationSuccess from './ReservationSuccess'
import SignSVG from '../public/images/sign.svg'
import { languageContext } from '../pages/_app'
export default function JobPortal() {
    return(
    <ResponsiveContainer className="jobportal">
        <div className="jobportal--container">
            <h2>Coming soon...</h2>
        </div>
    </ResponsiveContainer>)
}
