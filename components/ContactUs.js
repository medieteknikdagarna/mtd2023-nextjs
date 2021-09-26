import React from 'react'
import ContactMap from '../components/ContactMap'
import ContactCard from '../components/ContactCard'
import ContactForm from './ContactForm'

export default function ContactUs({className}) {

    return (
        <div className="contact-us-section">
                <div className="contact-cards-container">
                    <ContactCard title="Generella frågor" body="Vid generella frågor, om vad som helst, kontakta Afra på:" textToCopy="afra.farkory@medieteknikdagen.se"/>
                    <ContactCard title="Företagskontakt" body="Vid generella frågor, om vad som helst, kontakta Afra på:" textToCopy="gabriel.cederqvist@medieteknikdagen.se"/>
                    <ContactCard title="Webb" body="Har du frågor över innehållet på sidan? Hittat något som ser knasigt ut? Kontakta Jakob på:" textToCopy="jakob.karlstrand@medieteknikdagen.se"/>
                    <ContactCard title="Mässinformation" body="Vid generella frågor, om vad som helst, kontakta Afra på:" textToCopy="victor.imark@medieteknikdagen.se"/>
                </div>
            
                
                <div className="contact-map-container">
                    <ContactMap longLat={[58.590438, 16.176325]}>
                        <h4>Besöksadress</h4>
                        <p>Täppan, Campus Norrköping<br/> Bredgatan 34 <br/>602 21 Norrköping</p>
                    </ContactMap>
                    <ContactMap longLat={[58.590438, 16.176325]}>
                        <h4>Postadress</h4>
                        <p>Medieteknikdagen, MT-sektionen<br/> Kårhuset, Trappan <br/>Universitetet<br/>602 21 Norrköping <br/>SWEDEN</p>
                    </ContactMap>
                    <ContactMap longLat={[58.590438, 16.176325]}>
                        <h4>Leveransadress</h4>
                        <p>Täppan, Campus Norrköping<br/> Bredgatan 34 <br/>602 21 Norrköping</p>
                    </ContactMap>
                </div>
        </div>  
    )
}
