import React from 'react'
import './aboutpage.css'
import Essence from './Essence/Essence'
import Hero from '../../Utilities/Hero/Hero'
import abthero from '../../assets/footer.jpg'
import History from './History/History'
function Aboutpage() {
  return (
    <div className='overall-aboutpg-container'>
        <Hero page="About" imgsrc = {abthero}/>
        <History/>
        <Essence/>
        </div>
  )
}

export default Aboutpage