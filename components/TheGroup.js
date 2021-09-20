import React from 'react'
import MemberCard from './MemberCard'
import avatar_jakob from '../public/images/avatar_jakob.jpg'


export default function TheGroup() {
    
    return (
        <div className="contact-us-container">
        <div className="the-group-section">
            <h1>Gruppen</h1>
            <div className="member-card-container">
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
                <MemberCard src={avatar_jakob.src} name="Jakob Karlstrand" post="Webb" phone="+46 723 52 56 17" email="jakob.karlstrand@medieteknikdagen.se"/>
            </div>
        </div>
        </div>
    )
}
