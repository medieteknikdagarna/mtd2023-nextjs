import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import LoadingSpinner from '../components/LoadingSpinner';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { importAll } from './fair';
import { languageContext } from './_app';
const content = require("../public/content/companies.json")
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

  function CompanyImages (){
    const [images, setImages] = useState([])
    

    useEffect(() => {
     const images = importAll(require.context('../public/images/previous_companies', false, /\.(svg)$/));
     console.log(images)
     let imgs = []
     for(let key in images){
         if(key.includes("svg")){
            imgs.push(images[key].default)
         }
     }
     setImages(shuffleArray(imgs))
 
    }, [])

    return (
        <div className="companies-container">
            {!images && <LoadingSpinner/> || images.map(i => i())}
        </div>
    )
  }

export default function Companies() {

    const [lang, setLang] = useContext(languageContext)

    return (
        <div>
        <Header changeOnScroll/>
        <ResponsiveContainer className="rc-companies">
            <InfoSection tag="" title={content[lang].title} body={content[lang].body}/>
            <CompanyImages/>
        </ResponsiveContainer>
        <Footer/>    
        </div>
    )
}
