import React from 'react'
import { NextSeo } from 'next-seo';
import SeatBooker from '../components/SeatBooker';
import Header from '../components/Header';



export default function BookingPage() {
    return (
        <>
        <NextSeo noindex={true} />
        <div>
            <Header changeOnScroll/>
            <SeatBooker type="gold"/>
        </div>
        </>
    )
}
