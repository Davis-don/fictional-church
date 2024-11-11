import React from 'react'
import './sermons.css'
import Hero from '../../components/Hero/Hero'
import './sermons.css'
import sermonsImg from '../../assets/english.jpg'
import Daysermon from '../../components/Sermon/Daysermon'
import Quote from '../../components/Quote/Quote'
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