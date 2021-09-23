import React from 'react'
import InfoSection from './InfoSection'
import Tappan from "../public/images/platsbokaren_utan_platser.svg"
import Button from './Button'
import AfterMovie from './AfterMovie'
export default function TheFair() {

    return (
        <div className="the-fair">
        <div>
            <InfoSection tag="MTD2022" title="Mässan" body={"Mässan håller till på våning 4 och 5 i Täppan, Campus Norrköping. Lokalen passar perfekt för MTD då den är utformad som en cirkel och äger rum i studenternas vardagliga studiemiljö. Med en trappa samt två hissar i varje ände, är det garanterat alltid mycket trafik! Medieteknikdagen är till för att föra studenter och företag samman. Det är en mycket uppskattad mässa från både studenter och företag. Nedan kan du se hur det har sett ut tidigare år under MTD"}>
                <Button type="secondary" style={{ marginTop: "1rem",borderColor: "var(--color-primary)", color: "var(--color-light)"}}>Platsbokaren</Button>
                <Button type="secondary" style={{marginTop: "1rem",borderColor: "var(--color-light)", color: "var(--color-light)"}}>Galleri</Button>
            </InfoSection>    
            <div className="the-fair--buttons">
                
            </div>
        </div>
        <Tappan/>
        </div>
    )
}
