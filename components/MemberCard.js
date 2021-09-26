import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'



export default function MemberCard({src, post, name, email, phone}) {
    return (
        <div className="member-card">
        <div className="member-card--top">
            <img src={src}></img>
        </div>
        <div className="member-card--bottom">
            <div className="member-card--content">
            <h3>{name}</h3>
            <span>{post}</span>

            <div className="member-card--contactinfo">
                <a href=""><FontAwesomeIcon icon={faEnvelope}/>{email}</a>
                <a href=""><FontAwesomeIcon icon={faPhone}/>{phone}</a>
            </div>
            <div className="member-card--spacer"></div>
            <div className="member-card--linked-in">
                <FontAwesomeIcon  icon={faLinkedin}/>
            </div>
            </div>
        </div>

        </div>
    )
}
