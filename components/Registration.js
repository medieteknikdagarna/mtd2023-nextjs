import { faPaperPlane, faInfoCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useRef } from 'react'
import Button from './Button'
import ResponsiveContainer from './ResponsiveContainer'
import Link from 'next/link'
import ReservationSuccess from './ReservationSuccess'

export default function Registration() {

    const [error, setError] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)
    const r_name = useRef();
    const r_company = useRef();
    const r_email = useRef();
    const r_phone = useRef();
    const r_msg = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(submitted){
            return
        }
        if(!r_name.current.value){
            setError("Fyll i ditt namn, tack!")
        }
        else if(!r_company.current.value){
            setError("Fyll i ert företag, tack!")
        }
        else if(!r_email.current.value){
            setError("Fyll i en email, tack!")
        }
        else{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: r_name.current.value,
                    company: r_company.current.value,
                    email: r_email.current.value,
                    phone: r_phone.current.value,
                    message: r_msg.current.value
                })
            };
            setSubmitted(true)
            setError(null)
            fetch('/api/register', requestOptions)
                .then(response => response.json())
                .then(res_data => {
                    if(res_data.success){
                        setSuccess(true)

                    }
                    else{
                        setError("Något gick fel tyvärr. Testa igen eller skicka direkt till vår email: info@medieteknikdagen.se")
                        setSubmitted(false)
                    }
                    
                });       
        }


    }



    return (
        <ResponsiveContainer className="registration-section">
        {success &&  <ReservationSuccess company={r_company.current.value} name={r_name.current.value}/>}
        {!success &&
            <div className="registration-wrapper">
                <div>
                    <h1>Intresseanmälan</h1>
                    <p>Skicka in en anmälan tillsammans med era kontaktuppgifter så mailar eller ringer vi upp er och berättar mer om olika partnerpaket, priser, förmåner, tillgängliga platser och svarar på alla era frågor!</p>
                </div>
                <div className="registration-form">
                    <form className="register-form">
                        <div>
                            <input className="register-form--input" ref={r_name} type="text" placeholder=" "></input>
                            <label className="register-form--label">Kontaktperson</label>
                        </div>
                        <div>
                            <input className="register-form--input" ref={r_company} type="text" placeholder=" "></input>
                            <label className="register-form--label">Företag</label>
                        </div>
                        <div>
                            <input className="register-form--input" ref={r_email} type="email" placeholder=" "></input>
                            <label className="register-form--label">Email</label>
                        </div>
                        <div>
                            <input className="register-form--input" ref={r_phone} type="tel" placeholder=" "></input>
                            <label className="register-form--label">Tel</label>
                        </div>
                        <div>
                            <textarea className="register-form--input" ref={r_msg} type="text" placeholder=" "></textarea>
                            <label  className="register-form--label">Meddelande</label>
                        </div>
                        <span>Genom att klicka på <b>Skicka</b> så accepterar du vår <Link href="/policy">integritetspolicy</Link></span>
                        {error && <div className="registration-error-message">
                            <div></div>
                            <span>{error}</span>
                        </div>}
                        <Button onClick={handleSubmit}><FontAwesomeIcon spin={submitted} icon={submitted ? faCircleNotch : faPaperPlane}/>Skicka</Button>
                    </form>
                </div>
            </div>}
        </ResponsiveContainer>
    )
}
