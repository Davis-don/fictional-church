import React from 'react'
import './sermons.css'
import Hero from '../../Utilities/Hero/Hero'
import './sermons.css'
import sermonsImg from '../../assets/english.jpg'
import Daysermon from './Daysermon'
import Quote from './Quote/Quote'
function Sermons() {
  return (
    <div className='overall-sermons-page-overall'>
        <Hero page="Sermons" imgsrc={sermonsImg}/>
        <Daysermon/>
        <Quote/>

        </div>
  )
}

export default Sermons