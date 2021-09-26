import React from 'react'
import InfoSection from './InfoSection'
export default function Lecturer({tag, name,body, imgSrc, alt}) {

    return (
        <div className="lecturer">
        <InfoSection tag={tag} title={name} body={body}/>
        <img src={imgSrc} alt={alt}></img>
        </div>
    )
}
