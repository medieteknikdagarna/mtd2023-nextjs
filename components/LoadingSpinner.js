import React from 'react'
import logo from '../public/images/spinner.gif'

export default function LoadingSpinner() {
    return (
        <div>
            <img src={logo.src} alt="Loading..."></img>
        </div>
    )
}
