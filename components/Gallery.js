import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { importAll } from '../pages/fair'
import ImageGallery from 'react-image-gallery';
import InfoSection from './InfoSection';
import LoadingSpinner from './LoadingSpinner';

export default function Gallery() {

    const [images, setImages] = useState([])
    

    useEffect(() => {
        let imgs = importAll(require.context('../public/images/gallery', false, /\.(png|jpe?g|svg)$/));

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
        
    }, [])
    return (
        <>
        {!images && <LoadingSpinner/> ||
        <div id="scroll-gallery" className="gallery-section">
            
            
            <InfoSection className="infosection-gallery" style={{color: "white"}} title="Galleri" tag="Tidigare år" body="Här kan ni se lite härliga bilder från MTD2020 som var på plats i Täppans lokaler!"/>
            <ImageGallery items={images}/>

        </div>
        }
        </>
    )
}
