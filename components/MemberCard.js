import React from 'react'


export default function MemberCard({src, post, name, email, phone}) {
    return (
        <div className="member-card">
        <div className="member-card--left"></div>
        <img src={src}></img>
        <div className="member-card--right">
            <h2>{name}</h2>
            <h4>{post}</h4>
            <a href={"email:" + email}>{email}</a>
            <a href={"tel:" + phone}>{phone}</a>
        </div>
            
        </div>
    )
}
