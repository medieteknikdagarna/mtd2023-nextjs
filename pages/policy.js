import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { languageContext } from './_app'
import ResponsiveContainer from '../components/ResponsiveContainer'
import { NextSeo } from 'next-seo'
const data = require("../public/content/privacy-policy.json")
export default function Policy() {

    const [lang] = useContext(languageContext)  

    return (
        
        <>
        <NextSeo title="Integritetspolicy"
        description="På den här sidan hittar du vår policy som vi följer för att skydda dina personuppgifter och din integritet. De ska följa riktlinjerna i Dataskyddsförordningen GDPR"
        canonical="https://www.medieteknikdagen.se/policy"
        />
            <Header changeOnScroll/>
            <ResponsiveContainer>
           <div className="section-policy">
                <div>
                    <h1>{data[lang].title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: data[lang].ingress }}></p>

                    <h3>{data[lang].contactForm.title}</h3>
                    <p>{data[lang].contactForm.body}</p>

                    <h4>{data[lang].contactForm.storedData.title}</h4>
                    <p>{data[lang].contactForm.storedData.body}</p>

                    <h4>{data[lang].contactForm.why.title}</h4>
                    <p>{data[lang].contactForm.why.body}</p>

                    <h4>{data[lang].contactForm.editOrDeleteData.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: data[lang].contactForm.editOrDeleteData.body}}></p>

                    <h3>{data[lang].thirdParty.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: data[lang].thirdParty.body}}></p>

                    
                    
                </div>
            </div>
            </ResponsiveContainer>
            <Footer/>
        </>
    )
}
