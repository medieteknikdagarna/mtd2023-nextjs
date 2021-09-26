import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useFetch from '../components/utilities/useFetch'
import Fallback from '../components/utilities/Fallback'
import { useContext } from 'react'
import { languageContext } from './_app'
import ResponsiveContainer from '../components/ResponsiveContainer'
export default function Policy() {

    const { data, loading, error } = useFetch('/api/content/privacy-policy')
    const [lang] = useContext(languageContext)  
    console.log(data)

    return (
        
        <>
            <Header changeOnScroll/>
            <ResponsiveContainer>
            {data &&  <div className="section-policy">
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
            </div> }
            </ResponsiveContainer>
            <Footer/>
        </>
    )
}
