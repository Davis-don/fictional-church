import React from 'react'
import './aboutpage.css'
import Essence from './Essence/Essence'
import Hero from '../../Utilities/Hero/Hero'
import abthero from '../../assets/footer.jpg'
function Aboutpage() {
  return (
    <div className='overall-aboutpg-container'>
        <Hero page="About" imgsrc = {abthero}/>
        <Essence/>
        </div>
  )
}

export default Aboutpage