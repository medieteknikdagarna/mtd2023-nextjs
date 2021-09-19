import React from 'react'
import DownloadButton from './DownloadButton'
export default function PressAndMedia() {
    return (
        <div className="press-and-media-container">
        <div className="press-and-media-section">
            <div className="press-info">
                <h1>Press and media</h1>
                <p>Representerar du press eller övrig media och är lite nyfiken på MTD? Här hittar du en kort sammanfattning om vad Mediekteknikdagen är.</p>
                <h3>Pressinformation</h3>
                <p>Medietekniksektionen har sedan 2001 arrangerat Medieteknikdagen – MTD. MTD har under ett decennium utvecklats från en dag i en föreläsningssal till en mässa med föreläsningar och bankettsittning.

                Gruppen som anordnar MTD består av tretton engagerade medieteknikstudenter från varierande årskurser. Under drygt ett halvår hålls möten och MTD (med mässa, föreläsare, bankett) växer fram. Under själva mässdagen är 40-50 studenter engagerade som värdar av olika slag.

                MTD erbjuder studenter en möjlighet att knyta kontakter med företag, ställa frågor om karriärval och ordna examensarbeten eller praktikplatser. För utställarna är det en chans att marknadsföra sig själva mot potentiella framtida medarbetare.

                Föreläsningarna som hålls av exjobbare och gästföreläsare är tänkta att vara inspirerande och ge lite extra energi till de duktigt hårt studerande medieteknikstudenterna.</p>

            </div>
            <div className="press-contact">
                <div className="press-contact--outline">
                    <h2>Presskontakt</h2>
                    <h4>Daniel Wärulf</h4>
                    <a href="email:daniel.warulf@medieteknikdagen.se">daniel.warulf@medieteknikdagen.se</a>
                    <a href="tel:0723525617">+46 723 52 56 17</a>
                    <div className="press--downloads">
                        <h3>Nedladdningar</h3>
                            <span className="download-tag">För webb(.svg & .png )</span>
                            <DownloadButton link={""}/>
                            <span className="download-tag">För tryck(.ai )</span>
                            <DownloadButton link={""}/>
                            


                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
