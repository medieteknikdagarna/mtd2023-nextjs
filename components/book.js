import React, { useEffect } from 'react'
import Header from './Header';

import SeatBooker from './SeatBooker';



export default function book() {

    

    return (
        <div>
            <Header changeOnScroll/>
            <SeatBooker/>
            
        </div>
    )
}
