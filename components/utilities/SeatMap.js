import React, { useContext, useEffect } from 'react'
import BookerSVG from "../../public/images/platsbokaren.svg"
import { selectedContext } from '../SeatBooker'
import {useTransition, animated} from 'react-spring'

export function isReserved(seat, listOfReserved){
    let isReserved = false
    listOfReserved.forEach(booking =>{
        if(seat.seat == booking.seat && seat.level == booking.level){
            isReserved = true;
        }
    })
    return isReserved
}

export default function SeatMap({seats, reservations, activeFloor,type}) {

    const travelDst = 500
    console.log(seats)
    const floor5Transition = useTransition(activeFloor===5, {
        from: {  y: -travelDst, opacity: 0},
        enter: {  y: 0, opacity: 1},
        leave: { y: -travelDst,opacity: 0 }
      })
      const floor4Transition = useTransition(activeFloor===4, {
        from: { y: travelDst,opacity: 0 },
        enter: { y: 0,opacity: 1 },
        leave: {  y: travelDst,opacity: 0 }
      })

      console.log(seats,reservations)

    const [selectedSeat, setSelected] = useContext(selectedContext)
    const assignSeats = () => {
    
        seats.forEach(seat => {
            const element = document.getElementById(seat.id)
            console.log(isReserved(seat, reservations))
            if(!element){
                console.error("Cant get element from id: " + seat.id)
                return
            }
            if(seat.type !== type){
                element.classList.add("seat-inactive");
                var color = "#b9b9b9"
            }

            else if(seat.id === selectedSeat.id){
                element.classList.add("seat-active");
                var color = "#FFF068"
            }
            else if(isReserved(seat, reservations)){
                
                var color = "#E07979"
                element.classList.remove("seat-active");
            }
            else{
                var color = "#89E17B"
                element.classList.remove("seat-active");
                
            }
            

            element.style.fill = color;
            if(seat.type === type){
                element.addEventListener('click', handleClick)
                element.classList.add("seat-animation")
            }
            else{
                
            }
            
        })
    
    }

    const handleClick = (e) =>{
        const newSeat = seats.filter(seat =>{
            return seat.id === e.path[0].id
        })

        setSelected(newSeat[0])
    }

    useEffect(() => {
        assignSeats()
    }, [selectedSeat])


    return (
        <div>
        <h2>Plan {activeFloor}</h2>
        {
        floor4Transition(
            (styles, item) => item && <animated.div style={styles}><BookerSVG key={activeFloor}/></animated.div>
          )}
          {
              floor5Transition(
                (styles, item) => item && <animated.div style={styles}><BookerSVG key={activeFloor}/></animated.div>
              )
          }
          </div>
          
    )
}

