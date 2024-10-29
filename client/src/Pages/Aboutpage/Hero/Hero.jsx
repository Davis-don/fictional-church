import React from 'react'
import './Hero.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Hero() {
  return (
    <div className='ovearall-about-hero-container'>
        <div className="hero-textbox-aboutpg">
          <ul className='list-unstyled about-hero-links-container'>
           <li className='text-light'><h1>About</h1></li>
           <li>
            <ul className='list-unstyled about-nav-links'>
             <li className='text-light'><h2>Home</h2></li>
             <li className='text-light'><h2>/</h2></li>
             <li className='text-light'><h2>About</h2></li>
            </ul>
           </li>
          </ul>
        </div>
        </div>
  )
}

export default Hero