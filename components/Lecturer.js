import React from 'react'
import InfoSection from './InfoSection'
export default function Lecturer({tag, name,body, children}) {

    return (
        <div className="lecturer">
        <InfoSection tag={tag} title={name} body={body}/>
        </div>
    )
}
