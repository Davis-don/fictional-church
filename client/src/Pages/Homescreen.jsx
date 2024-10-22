import React from 'react'
import Header from '../Components/Header/Header'
import './Homepage.css'
import Carosel from '../Components/Carosel/Carosel'

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
        
        
        </div>
  )
}

export default Homescreen