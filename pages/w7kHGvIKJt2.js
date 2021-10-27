import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { useRouter } from 'next/router';
import SeatBooker from '../components/SeatBooker';



export default function BookingPage() {
    return (
        <div>
            <SeatBooker/>
        </div>
    )
}
