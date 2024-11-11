import React from 'react'
import './aboutpage.css'
import Essence from '../../components/Essence/Essence'
import Hero from '../../components/Hero/Hero'
import abthero from '../../assets/footer.jpg'
import History from '../../components/History/History'
import Fathers from '../../components/Fathers/Fathers'
import Gallery from '../../components/Galleries/Gallery'
import Leadership from '../../components/Leadership/Leadership'
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