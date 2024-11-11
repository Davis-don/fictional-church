import React from 'react'
import './gallery.css'
import Gallerycardcomponent from './Gallerycardcomponent'
import galleryData from './dummydata'

function Gallery() {
  return (
    <div className='ovearall-gallery-container'>
        <h1>Gallery</h1>
        <div className="gallery-cards-overall">        
    {
        galleryData.map((content)=><Gallerycardcomponent image={content.image} date={content.date} title={content.title} description={content.description}/>)
    }
    </div>
        </div>
  )
}

export default Gallery