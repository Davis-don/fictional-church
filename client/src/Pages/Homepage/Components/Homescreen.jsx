import React from 'react'
import Header from '../../../Utilities/Header/Header'
import './Homepage.css'
import Carosel from './Carosel/Carosel'
import Abouthomepg from './Aboutsection/Abouthomepg'

function Homescreen() {
  return (
    <div className='overall-homapage-container'>
      <div className="header-hero-container">
      <div className="header-homepage">
      <Header/>
      </div>
      <div className="carosel-homepage">
    <Carosel/>
      </div>
      </div>

      <div className="about-homepage-container">
      <Abouthomepg/>
      </div>
        
        
        </div>
  )
}

export default Homescreen