import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Registration from '../components/Registration'
export default function register() {
    return (
        <div>
            <Header style={{backgroundColor: "black"}} lightContrast changeOnScroll/>
            <Registration/>

            <Footer/>
        </div>
    )
}
