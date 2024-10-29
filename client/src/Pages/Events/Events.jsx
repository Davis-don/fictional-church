import React from 'react'
import './events.css'
import Hero from '../../Utilities/Hero/Hero'
import Eventsimg from '../../assets/footer.jpg'

function Events() {
  return (
    <div className='overall-sermons-page-section'>
         <Hero page="Events" imgsrc={Eventsimg}/>
        </div>
  )
}

export default Events