import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from '@react-spring/core'

export default function Carousel({items}) {
    const [activeSlide, setActive] = useState(0)
    const lastSlide = items.length - 1

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


    return (
        <div className="carousel-container">
        <div className="carousel-slide-left"><FontAwesomeIcon onClick={() => makeSlide(-1)} size="2x" icon={faChevronCircleLeft}/></div>

        <div className="carousel-content">
        
          {items[activeSlide]}
        </div>
        <div className="carousel-slide-right"><FontAwesomeIcon onClick={() => makeSlide(1)} size="2x" icon={faChevronCircleRight}/></div>

        <div className="carousel-pagination">
            {generatePaginationCircles(items.length, activeSlide)}
        </div>
            
        </div>
    )
}
