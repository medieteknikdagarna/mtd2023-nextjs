import React, { useContext } from 'react'
import { useState,useRef } from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ThankYou from '../components/ThankYou'
import { languageContext } from '../pages/_app'
const content = require("../public/content/form.json")
export default function ContactForm() {
    const [error, setError] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)
    const r_name = useRef();
    const r_company = useRef();
    const r_email = useRef();
    const r_phone = useRef();
    const r_msg = useRef();
    const [lang, setLang] = useContext(languageContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(submitted){
            return
        }
        if(!r_name.current.value){
            setError("Fyll i ditt namn, tack!")
        }
        else if(!r_email.current.value){
            setError("Fyll i en email, tack!")
        }
        else if(!r_msg.current.value){
            setError("Fyll i meddelande, tack!")
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
            fetch('/api/ask', requestOptions)
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
        <>
        {success && <ThankYou/> ||
        <div className="registration-form">
            <h4>{lang === "sv" ? "Hej!" : "Hi!"}<br/><span>{content[lang].hi}</span></h4>
        <form className="register-form">
            <div className="register-form--row-container">
                <input className="register-form--input" ref={r_name} type="text" placeholder=" "></input>
                <label className="register-form--label">{content[lang].name}</label>
            </div>
            <div className="register-form--row-container">
                <input className="register-form--input" ref={r_company} type="text" placeholder=" "></input>
                <label className="register-form--label">{content[lang].company}</label>
            </div>
            <div className="register-form--row-container">
                <input className="register-form--input" ref={r_email} type="email" placeholder=" "></input>
                <label className="register-form--label">Email</label>
            </div>
            <div className="register-form--row-container">
                <input className="register-form--input" ref={r_phone} type="tel" placeholder=" "></input>
                <label className="register-form--label">Tel</label>
            </div>
            <div className="register-form--row-container">
                <textarea className="register-form--input" ref={r_msg} type="text" placeholder=" "></textarea>
                <label  className="register-form--label">{content[lang].message}</label>
            </div>
            {error && <div className="registration-error-message">
                <div></div>
                <span>{error}</span>
            </div>}
            <div className="form-btn-margin">
            <Button onClick={handleSubmit}><FontAwesomeIcon spin={submitted} icon={submitted ? faCircleNotch : faPaperPlane}/>{lang === "sv" ? "Skicka" : "Send"}</Button>
            </div>
        </form>
    </div>}</>
            
    )
}
