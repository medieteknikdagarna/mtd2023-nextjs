import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import LoadingSpinner from '../components/LoadingSpinner';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { importAll } from './fair';

export function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default function companies() {
    const [images, setImages] = useState([])
   useEffect(() => {
    const images = importAll(require.context('../public/images/previous_companies', false, /\.(svg)$/));
    let imgs = []
    for(let key in images){
        imgs.push(images[key].default)
    }
    console.log(imgs)
    setImages(shuffleArray(imgs))

   }, [])
    return (
        <div>
        <Header changeOnScroll/>
        <ResponsiveContainer className="rc-companies">
            <InfoSection tag="Tidigare år" title="Företag från tidigare år" body="Nedan listas ett axplox av företag som har varit med tidigare år. Vi hoppas att kunna ha med erat företag 2023!"/>
            <div className="companies-container">
               {!images && <LoadingSpinner/> || images.map(i => i())}
            </div>
        </ResponsiveContainer>
        <Footer/>    
        </div>
    )
}
