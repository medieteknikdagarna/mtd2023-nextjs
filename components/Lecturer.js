import React from 'react'
import blob from '../content/images/blob.svg'

export default function Lecturer({tag, name, children}) {
    const rotateDegree = Math.floor(Math.random() * 4) * Math.PI/2;
    const url = "url(" + blob + ")"
    return (
        <div className="lecturer" style={{backgroundImage: url}}>
            {children}
        </div>
    )
}
