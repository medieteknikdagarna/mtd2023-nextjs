import React from 'react'

export default function ResponsiveContainer(props) {

    return (
        <div style={props.style} className={`responsive-container ${props.className}`}>
        <div className="responsive-container--content">
            {props.children}
        </div>
        </div>
    )
}
