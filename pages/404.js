import React, { useContext } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import ResponsiveContainer from '../components/ResponsiveContainer'
import { languageContext } from './_app'

export default function Error404() {
    const [lang, setLang] = useContext(languageContext)

    const content = lang === "sv" ? "Den här sidan verkar tyvärr inte finnas" : "This page does not seem to exist"
    return (
        <section>
            <Header />
            <ResponsiveContainer className="error-404">
                <h1>404</h1>
                <p>{content} :(</p>
                <Button href="/">{lang === "sv" ? "Tillbaka hem" : "Back home"}</Button>
            </ResponsiveContainer>
        </section>
    )
}
