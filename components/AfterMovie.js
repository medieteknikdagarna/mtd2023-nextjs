import React from 'react'

export default function EmbeddedVideo({src}) {

    return(
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>)
  }