import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import axios from 'axios';
import SeatMap from './utilities/SeatMap';
import LoadingSpinner from './LoadingSpinner';
import { isReserved } from './utilities/SeatMap';
import ReservationSuccess from './ReservationSuccess';

export const selectedContext = React.createContext()


export default function SeatBooker() {
    const [data, setData] = useState({seatData: null, reservedData: null, activeSeat: null, loading: true}) //List of alla available seats 
    const [hasSubmitted, setSubmitted] = useState(false);
    const [activeLevel, setLevel] = useState(5);
    const [selectedSeat, setSelected] = useState(null);
    const [reservationSuccess, setReservationSuccess] = useState(false);
    const [error, setError] = useState(null);

    const f_name = useRef()
    const f_company = useRef()
    const f_email = useRef()
    const f_phone = useRef()
    const f_message = useRef();

    const newError = (error_text) => {
        setError(error_text)
    }


    useEffect( () => {

        Promise.all([
            axios("/api/seats"),
            axios("/api/reserved")
        ]).then(([seatList, reservedList]) =>{
            const selected = seatList.data.filter(seat =>{
                return seat.seat === 1 && seat.level === activeLevel
            })[0]
            setSelected(selectedSeat ? selectedSeat : selected)
            setData({seatData: seatList.data, reservedData: reservedList.data, loading: false})
            
        })
    }, [])


    const handleOnChange = (e) =>{
        let n = e.target.value-1

        const seatsOnCurrentFloor = data.seatData.filter(seat => seat.level === activeLevel)

        if(n < 0){
            n = 0
        }
        else if (n >= seatsOnCurrentFloor.length){
            n = seatsOnCurrentFloor.length-1
        }

        const seat = seatsOnCurrentFloor[n]

        
        setSelected(seat)
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
                    seat: selectedSeat.seat,
                    level: activeLevel,
                    message: f_message.current.value
                })
            };
            setSubmitted(true)
            setError(null)
            fetch('/api/reserved', requestOptions)
                .then(response => response.json())
                .then(res_data => {
       
                    if(res_data.success){
                        setReservationSuccess(true)
                    }
                    else{
                        setError("This seat is already taken.")
                        setSubmitted(false)
                    }
                    
                });        
        }
        else{
            newError("Please fill in all the fields correctly")
        }
    } 


    return (
        <section className="seat-booking-section">
        <div className="seat-booker">
        {(!data.loading && !reservationSuccess) &&
        <>
        <selectedContext.Provider value={[selectedSeat, setSelected]}>
            <SeatMap key={activeLevel} activeFloor={activeLevel} seats={data.seatData.filter(seat=> seat.level === activeLevel)} reservations={data.reservedData} selected={selectedSeat}/>
        </selectedContext.Provider>
        {!reservationSuccess &&
        <div className="form-info">
            <h2>{"Plats #" + selectedSeat.seat}</h2>
            <div className="indicator">
                <div style={{backgroundColor: isReserved(selectedSeat,data.reservedData) ? "#FF7C7C" : "#97FF86"}} className="indicator--icon"></div>
                <h4>{isReserved(selectedSeat,data.reservedData) ? "Reserverad" : "Ledig"}</h4>
            </div>
            <div className="seat-info">
                <span>{ selectedSeat.type.charAt(0).toUpperCase() + selectedSeat.type.slice(1)}</span>
                <div className="small-spacer"></div>
                <span>{"Plan " + activeLevel}</span>
                <div className="small-spacer"></div>
                <span>fr. 14 999 SEK</span>
            </div>
            <div className="booking-form">
                <div className="flex-input">
                    <div >
                        <label>Plats</label><br/>
                        <input  type="number" onChange={handleOnChange} min={1} max={data.length} value={selectedSeat.seat} />
                    </div>
                    <div className="div-radio">
                        <label>Plan 4</label>
                        <input  className="input-radio" type="radio" checked={activeLevel===4} onClick={() => setLevel(4)}/>
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
                <label>Eventuellt meddelande</label>
                <textarea className="input-message" ref={f_message} type="text"/>
                <span className="warning-booking"><FontAwesomeIcon className="info-circle" icon={faInfoCircle}/>Denna reservation är inte bindande. Vi kommer att kontakta er för att bekräfta bokningen så fort vi kan</span>
                {error && <div className="error-message"><div></div><span>{error}</span></div>}
                <Button onClick={handleSubmit} style={{width: "100%", fontSize: "1.5rem"}} type="primary" size="medium">{hasSubmitted ? "Laddar..." : "Reservera"}</Button>
            
            </div>
        </div>}
        </>
        }
        {reservationSuccess && <ReservationSuccess company={f_company.current.value} name={f_name.current.value} seat={selectedSeat.seat} floor={activeLevel}/>}
        {data.loading && <LoadingSpinner/>}
        

        </div>
        </section>
    )
}
