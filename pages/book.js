import React, { useEffect } from 'react'
import Header from '../components/Header';

import SeatBooker from '../components/SeatBooker';



export default function book() {

    

    return (
        <div>
            <Header changeOnScroll/>
            <SeatBooker/>
            
        </div>
    )
}
