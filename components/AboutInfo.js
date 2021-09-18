import React from 'react'
import MTDSvg from '../public/images/mtd.svg'
import MTSvg from '../public/images/mt_logo.svg'

export default function AboutInfo() {
    return (
        <div className="about-info">
            <div className="about-info--mtd">
                <div className="about-info--img-container">
                    <MTDSvg/>
                </div>
                <div>
                    <h3>Medieteknikdagarna 2022</h3>
                    <p>
                    Medieteknikdagen är ett ideellt arrangemang drivet av och för studenter. Syftet är att knyta kontakter mellan studenter, medietekniker ute i arbetslivet och företagen inom branschen. 
                    <br/><br/>
                    MTD är ett tillfälle för företag och studenter att inspirera, informera och integrera med varandra. Såväl företag som studenter får här en chans att visa det allra senaste inom medieteknik.
                    </p>
                </div>
            </div>
            <div className="about-info--mt">
                <div className="about-info--img-container">
                    <MTSvg/>
                </div>
                <div>
                    <h3>Civilingenjörsprogrammet i medietenik på Linköpings Universitet</h3>
                    <p>Civilingenjörsprogrammet i Medieteknik är utbildningen där tekniken gifter sig med kreativiteten.
                        <br/><br/>
                        Resultatet blir en unik spetskompetens inom områden som blir allt viktigare. Klassiska ingenjörsämnen blandas med programmering, visualisering, datorgrafik, interaktionsdesign, ljud och mycket mer. 
                        <br/><br/>Utbildningen är belägen på universitets campus Norrköping, med närhet till Visualiseringscenter C, och på så vis till världsledande forskning. 
                        <br/><br/>Läs mer om medieteknikprogrammet på sektionens hemsida, <a href="www.medieteknik.nu">www.medieteknik.nu</a> samt på <a href="www.liu.se/medieteknik">www.liu.se/medieteknik</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
