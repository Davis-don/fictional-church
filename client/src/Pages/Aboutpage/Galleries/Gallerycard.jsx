import React from 'react'
import './gallerycard.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const centerText = {
textAlign:"center"
}
function Gallerycard({image,date,title,description}) {
  return (
    <div className='gallery-card card'>
      <div className="image-gallery-item">
      <img src={image} alt='gallery image'/>
      </div>
      <h3 style={centerText} className='text-secondary container-fluid'>{date}</h3>
      <h4 style={centerText}>{title}</h4>
      <p style={centerText} className='text-secondary fs-5'>{description}</p>
      </div>
  )
}

export default Gallerycard