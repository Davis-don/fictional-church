import React from 'react'
import './aboutpage.css'
import Essence from './Essence/Essence'
import Hero from '../../Utilities/Hero/Hero'
import abthero from '../../assets/footer.jpg'
import History from './History/History'
import Fathers from './Fathers/Fathers'
import Gallery from './Galleries/Gallery'
import Leadership from './Leadership/Leadership'
function Aboutpage() {
  return (
    <div className='overall-aboutpg-container'>
        <Hero page="About" imgsrc = {abthero}/>
        <History/>
        <Fathers/>
        <Essence/>
        <Gallery/>
        <Leadership/>

        </div>
  )
}

export default Aboutpage