import React from 'react'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carosel from './Hero/Carosel/Carosel'

function Homescreen() {
  return (
    <div className='ovearall-homescreen-container'>
    <div className="homepage-hero-section">
    <Carosel/>
    </div>
      </div>
  )
}

export default Homescreen
