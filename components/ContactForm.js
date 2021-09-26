import React from 'react'

export default function ContactForm() {
    return (
         <form className="contact-form">
            <label>Namn</label>
            <input/>

            <label>Företag</label>
            <input/>
            <label>Email</label>
            <input/>
           
            <label>Meddelande</label>
            <textarea></textarea>
            <button>Send</button>
        </form>
            
    )
}
