import React from 'react'
import Button from '../components/Button'
import useWindowDimensions from './utilities/useWindowDimensions'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    const router = useRouter()
    const { slug } = router.query

    return (
        <div className="contact-submenu">
                <SubmenuLink href="/contact/us" active={slug === "us"}>Kontakta oss</SubmenuLink>
                <SubmenuLink href="/contact/the-group" active={slug === "the-group"}>Gruppen</SubmenuLink>
                <SubmenuLink href="/contact/press-and-media" active={slug === "press-and-media"}>Press & media</SubmenuLink>
        </div>)
}
