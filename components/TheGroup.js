import React, { useContext, useEffect, useState } from 'react'
import MemberCard from './MemberCard'
const memberInfo = require("../public/content/members.json")
import placeholder from '../public/images/placeholder_1.png'
import { shuffleArray } from '../pages/companies'
import { languageContext } from '../pages/_app'


export default function TheGroup() {
    const [members, setMembers] = useState([])
    const [lang, setLang] = useContext(languageContext)

    useEffect(() => {

        let newArray = [memberInfo[0]]
        setMembers(newArray.concat(shuffleArray(memberInfo.slice(1))))
      
    }, [])
    
    return (<>
        {members && 
        <div className="the-group-section">
            <div className="member-card-container">
                {
                    members.map((member,i) =>{
                       return <MemberCard key={i} alt={member.namn} name={member.namn} post={member.post[lang]} email={member.email} phone={"+46 " + member.tel} src={placeholder.src} linkedin={member.linkedin} />
                    })
                }
            </div>
        </div>}
        </>
    )
}
