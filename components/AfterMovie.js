import React from 'react'
import useWindowDimensions from './utilities/useWindowDimensions'

export default function AfterMovie({showTitle=false}) {
    const {width, isMobile} = useWindowDimensions()
    const fbVideoUrl = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmedieteknikdagen%2Fvideos%2F1399763803536580%2F&show_text=false&width=560&t=0";

    return (
        <div className="after-movie-movie" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
            {showTitle && <h3 style={{justifySelf: "flex-start", fontSize: "2rem", color: "var(--color-light)"}}>After Movie 2022</h3>}
            <iframe src={fbVideoUrl} width={String(width-32)} height={String(width/1.8)} style={{maxHeight: "500px", maxWidth: "850px", border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={!isMobile}></iframe>
        </div>
    )
}
