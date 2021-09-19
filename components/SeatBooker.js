import React, { useState } from 'react'
import BookerSVG from '../public/images/platsbokaren.svg'
import { useEffect } from 'react';
import useFetch from './utilities/useFetch';

function setStatusOfSeats(arr, selected){

    const STATUS_COLORS = {
        "available": "#97FF86",
        "reserved": "#FF7C7C",
        "selected": "#FFF280"
    }
    arr.forEach(seat => {
        
        var element = document.getElementById(seat.id)
        if(element === null) return

        if(selected === seat.id && seat.status === "available"){
            element.classList.add("active-seat");
            var color  = "selected"
        }
        else{
            element.classList.remove("active-seat");
            var color  = seat.status;
        }
        element.style.fill = STATUS_COLORS[color];
    });
}


export default function SeatBooker() {
    const {data, loading, error} = useFetch("http://localhost:3000/api/seats")
    const [activeSeat, setSeat] = useState(null);
    const [activeLevel, setLevel] = useState(5);

    const onSeatSelect = (e) =>{
        const id = e.path[0].id;
        setStatusOfSeats(data,id);
        data.forEach((seat) =>{
            if(seat.id === id){
                setSeat(seat)
            }
        })
    }
    
    const handleOnChange = (e) =>{
        const n = e.target.value-1
        const seat = data[n]

        
        setSeat(seat)
        setStatusOfSeats(data,seat.id)
    }

    useEffect(() => {

        if(data !== null){
            setSeat(data[0])
            setStatusOfSeats(data,data[0].id)
            for(var i = 0; i< data.length; i++){
                document.getElementById(data[i].id).addEventListener("click", onSeatSelect);
            }
        }
    }, [data])
    return (
        
        <div className="seat-booker">
            <BookerSVG className="booker"/>
            {activeSeat && data &&
            <div>
                <h2>{"Plats #" + activeSeat.seat}</h2>
                <div className="indicator">
                    <div style={{backgroundColor: activeSeat.status === "reserved" ? "#FF7C7C" : "#97FF86"}} className="indicator--icon"></div>
                    <h4>{activeSeat.status === "reserved" ? "Reserverad" : "Ledig"}</h4>
                </div>
                    <div className="seat-info">
                        <span>{activeSeat.type}</span>
                        <span>{"Plan " + activeLevel}</span>
                        <span>fr. 14 999 SEK</span>
                    </div>
                    <div className="booking-form">
                        <div>
                            <label>Plats</label><br/>
                            <input onChange={handleOnChange} type="number" min={1} max={data.length} defaultValue={activeSeat.seat}/>
                        </div>
                        <div>
                            <label>Plan</label><br/>
                            <input onChange={(e) => setLevel(e.target.value)} type="number" max={5} min={4} value={activeLevel} />
                        </div>
                    
                </div>
            </div>}
        </div>
    )
}
