import React, { useContext } from 'react'
import Button from '../components/Button'
import useWindowDimensions from './utilities/useWindowDimensions'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { languageContext } from '../pages/_app'
const content = require("../public/content/contact-us.json")

export function SubmenuLink({active=false, children, href}){
    const {isMobile} = useWindowDimensions()
    const size = isMobile ? "small" : "medium"
    return(
        <Link href={href}>
            <Button size={size} type={active ? "primary" : "secondary"}>
                {children}
            </Button>
        </Link>
    )

}

export default function ContactSubmenu() {
    const [lang, setLang] = useContext(languageContext)
    const router = useRouter()
    const { slug } = router.query

    return (
        <div className="contact-submenu">
                <SubmenuLink href="/contact/us" active={slug === "us"}>{content[lang].buttons[0]}</SubmenuLink>
                <SubmenuLink href="/contact/the-group" active={slug === "the-group"}>{content[lang].buttons[1]}</SubmenuLink>
                <SubmenuLink href="/contact/press-and-media" active={slug === "press-and-media"}>{content[lang].buttons[2]}</SubmenuLink>
        </div>)
}
