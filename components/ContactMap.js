import React from 'react'

import { Map, Marker } from "pigeon-maps"
export default function ContactMap({longLat, children }) {
    return (
        <div className="contact-map">
            <Map height={250} defaultCenter={longLat} zoom={false} defaultZoom={16}>
                <Marker width={50} anchor={longLat}/>
            </Map>
            {children}
        </div>
    )
}
