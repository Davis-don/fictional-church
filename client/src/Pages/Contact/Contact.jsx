import React from 'react'
import contactimg from  '../../assets/footer.jpg'
import './contact.css'
import Hero from '../../components/Hero/Hero'
import Contactus from '../../components/Contactus/Contactus'

function Contact() {
  return (
    <div className='overall-contact-page-container'>
        <Hero page="Contact" imgsrc={contactimg}/>
        <Contactus/>
        </div>
  )
}

export default Contact