import React, { useRef, useState } from 'react'
import BookerSVG from '../public/images/platsbokaren.svg'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import useFetch from './utilities/useFetch';
import Button from './Button';
import {useTransition, animated, config} from 'react-spring'

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
    
    const {data, loading, error} = useFetch("/api/seats")
    const [activeSeat, setSeat] = useState(null);
    const [listOfSeats, setListOfSeats] = useState([false]);
    const [hasSubmitted, setSubmitted] = useState(false);
    const [activeLevel, setLevel] = useState(5);
    const [showPlane5, setShow5] = useState(true);
    const [showPlane4, setShow4] = useState(false);

    const f_name = useRef()
    const f_company = useRef()
    const f_email = useRef()
    const f_phone = useRef()


    const onSeatSelect = (e) =>{
        const id = e.path[0].id;
        setStatusOfSeats(data["level_" + activeLevel],id);
        data["level_" + activeLevel].forEach((seat) =>{
            if(seat.id === id){
                setSeat(seat)
            }
        })
    }

    const handleOnChange = (e) =>{
        let n = e.target.value-1
        if(n < 0){
            n = 0
        }
        else if (n >= data["level_" + activeLevel].length){
            n = data["level_" + activeLevel].length-1
        }

        const seat = data["level_" + activeLevel][n]

        
        setSeat(seat)
        setStatusOfSeats(data["level_" + activeLevel],seat.id)
    }

    const handleSubmit = () =>{
        if(f_name.current.value  && f_company.current.value  && f_email.current.value  && f_phone.current.value ){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: f_name.current.value,
                    company: f_company.current.value,
                    email: f_email.current.value,
                    phone: f_phone.current.value,
                    seat: activeSeat.seat,
                    level: activeLevel
                })
            };
            fetch('/api/seats', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
            setSubmitted(true)
        }
        else{
            console.log("Fill all fields")
        }
    } 

    useEffect(() => {
        
        if(data !== null){
            setSeat(data["level_" + activeLevel][0])
            setStatusOfSeats(data["level_" + activeLevel],data["level_" + activeLevel][0].id)
            for(var i = 0; i< data["level_" + activeLevel].length; i++){
                document.getElementById(data["level_" + activeLevel][i].id).addEventListener("click", onSeatSelect);
            }
        setSubmitted(false)
        }

    }, [data, hasSubmitted])
    return (
        <section className="seat-booking-section">
        <div className="seat-booker">
        <BookerSVG className="booker"/>
            {activeSeat && data &&
            <div className="form-info">
                <h2>{"Plats #" + activeSeat.seat}</h2>
                <div className="indicator">
                    <div style={{backgroundColor: activeSeat.status === "reserved" ? "#FF7C7C" : "#97FF86"}} className="indicator--icon"></div>
                    <h4>{activeSeat.status === "reserved" ? "Reserverad" : "Ledig"}</h4>
                </div>
                    <div className="seat-info">
                        <span>{ activeSeat.type.charAt(0).toUpperCase() + activeSeat.type.slice(1)}</span>
                        <div className="small-spacer"></div>
                        <span>{"Plan " + activeLevel}</span>
                        <div className="small-spacer"></div>
                        <span>fr. 14 999 SEK</span>
                    </div>
                    <div className="booking-form">
                        <div className="flex-input">
                            <div >
                                <label>Plats</label><br/>
                                <input onChange={handleOnChange} type="number" min={1} max={data.length} value={activeSeat.seat} />
                            </div>
                            <div className="div-radio">
                                <label>Plan 4</label>
                                <input className="input-radio" type="radio" checked={activeLevel===4} onClick={() => setLevel(4)}/>
                                <label>Plan 5</label>
                                <input className="input-radio" type="radio" checked={activeLevel===5} onClick={() => setLevel(5)}/>
                            </div>
                        </div>
                        <label>Kontaktperson</label>
                        <input ref={f_name} type="text"/>
                        <label>Företag</label>
                        <input ref={f_company} type="text"/>
                        <label>Email</label>
                        <input ref={f_email} type="email"/>
                        <label>Telefonnummer</label>
                        <input ref={f_phone} type="tel"/>
                        <span className="warning-booking"><FontAwesomeIcon className="info-circle" icon={faInfoCircle}/>Denna reservation är inte bindande. Vi kommer att kontakta er för att bekräfta bokningen så fort vi kan</span>
                        <Button onClick={handleSubmit} style={{width: "100%", fontSize: "1.5rem"}} type="primary" size="medium">RESERVERA</Button>
                    
                </div>
            </div>}

        </div>
        </section>
    )
}
