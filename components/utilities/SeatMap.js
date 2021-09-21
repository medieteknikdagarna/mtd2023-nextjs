import React, { useContext, useEffect } from 'react'
import BookerSVG from "../../public/images/platsbokaren.svg"
import { selectedContext } from '../SeatBooker'

export function isReserved(seat, listOfReserved){
    let isReserved = false
    listOfReserved.forEach(booking =>{
        if(seat.seat == booking.seat && seat.level == booking.level){
            isReserved = true;
        }
    })
    return isReserved
}

export default function SeatMap({seats, reservations}) {



    const [selectedSeat, setSelected] = useContext(selectedContext)
    const assignSeats = () => {
    
        seats.forEach(seat => {
            const element = document.getElementById(seat.id)

            if(seat.id === selectedSeat.id){
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
            element.addEventListener('click', handleClick)
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
            <BookerSVG className="booker"/>
        </div>
    )
}

