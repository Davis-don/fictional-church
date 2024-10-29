import React from 'react'
import './sermons.css'
import Hero from '../../Utilities/Hero/Hero'
import './sermons.css'
import sermonsImg from '../../assets/english.jpg'
function Sermons() {
  return (
    <div className='overall-sermons-page-overall'>
        <Hero page="Sermons" imgsrc={sermonsImg}/>
        </div>
  )
}

export default Sermons