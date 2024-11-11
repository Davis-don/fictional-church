import React from 'react'
import './events.css'
import Hero from '../../components/Hero/Hero'
import Eventsimg from '../../assets/events.jpg'
import Quote from '../../components/Quote/Quote'
import Upcomming from '../../components/Upcomming/Upcomming'

function Events() {
  return (
    <div className='overall-sermons-page-section'>
         <Hero page="Events" imgsrc={Eventsimg}/>
         <Upcomming/>
         <Quote/>
        </div>
  )
}

export default Events