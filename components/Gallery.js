import React, { useContext, useEffect, useState } from 'react'
import { importAll } from '../pages/massan'
import ImageGallery from 'react-image-gallery';
import InfoSection from './InfoSection';
import LoadingSpinner from './LoadingSpinner';
import { languageContext } from '../pages/_app';
const content = require("../public/content/fair.json")

export default function Gallery() {

    const [images, setImages] = useState([])
    const [lang, setLang] = useContext(languageContext)
    

    useEffect(() => {
        let imgs = importAll(require.context('../public/images/gallery', false, /\.(png|jpe?g|svg)$/));
        if(imgs){
        imgs.sort()
            let items = []
            for(var key in imgs){
            items.push({item: imgs[key], key: key})

            }
            var newItems = []
            for (var i = 0; i < items.length; i += 2){

                    newItems.push({
                        original: items[i].item.default.src,
                    })
                
            }
            setImages(newItems)
     }
        
    }, [])
    return (
        <>
        {!images && <LoadingSpinner/> ||
        <div id="scroll-gallery" className="gallery-section">
            
            
            <InfoSection className="infosection-gallery" style={{color: "white"}} title={content[lang].gallery.title} tag={lang === "sv" ? "Tidigare år" : "Previous years"} body={content[lang].gallery.body}/>
            <ImageGallery items={images}/>

        </div>
        }
        </>
    )
}
