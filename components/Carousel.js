import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from '@react-spring/core'

import { languageContext } from '../pages/_app'
import Lecturer from './Lecturer'
const content = require("../public/content/fair.json")

export default function Carousel() {
    const [activeSlide, setActive] = useState(0)
    const [lang, setLang] = useContext(languageContext)
    const [lecturers, setLecturers] = useState([])
    let lastSlide = lecturers.length -1
    const transitions = useTransition(activeSlide, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })

    const generatePaginationCircles = (num, active) =>{

        const circles = Array(num).fill(0).map((_,i) =>{
            return <div key={"circle"+i} className={i === active ? "carousel-circle carousel-circle--active" : "carousel-circle"}></div>
        })
        return <div className="carousel-circle-container">{circles}</div>
    }

    const makeSlide = (adder) =>{
        setActive(prev => {
            if(prev + adder > lastSlide){
                return 0
            }
            else if(prev + adder < 0 ){
                return lastSlide;
            }
            else{
                return prev+adder;
            }
        });
    }

    useEffect(() => {
        const data = require('../public/content/lecturers.json')
        const lecs = content[lang].lecturers.map((lec,i) =>{
            return <Lecturer key={i} tag={lec.tag} name={lec.name} body={lec.body}/>
        })
        setLecturers(lecs)

    }, [])


    return (
        <div className="carousel-container">
        <div className="carousel-slide-left"><FontAwesomeIcon onClick={() => makeSlide(-1)} size="2x" icon={faChevronCircleLeft}/></div>

        <div className="carousel-content">
        {lecturers[activeSlide]}
        </div>
        <div className="carousel-slide-right"><FontAwesomeIcon onClick={() => makeSlide(1)} size="2x" icon={faChevronCircleRight}/></div>

        <div className="carousel-pagination">
            {generatePaginationCircles(lecturers.length, activeSlide)}
        </div>
            
        </div>
    )
}
