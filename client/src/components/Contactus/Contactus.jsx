import React from 'react'
import './contactus.css'
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import 'bootstrap/dist/css/bootstrap.min.css'
function Contactus() {
  return (
    <div className='ovearall-contact-us-container'>
        <div className="left-section-contact">
      <h2>CONTACT US</h2>
      <ul className='list-unstyled contact-ul'>
        <li>
            <div className="icon-contact rounded-circle">
            <CiLocationOn className='fs-1'/>
            </div>
            <div className="text-contact">
            <p>10100 Kamakwa Rd, Nyeri, Kenya</p>
            </div>
        </li>
        <li>
            <div className="icon-contact rounded-circle">
            <IoIosCall className='fs-1'/>
            </div>
            <div className="text-contact">
            <p>+254 702 722 812</p>
            </div>
        </li>
        <li>
            <div className="icon-contact rounded-circle">
            <MdEmail className='fs-1'/>
            </div>
            <div className="text-contact">
            <p>info@tetucatholic.org</p>
            </div>
        </li>
        <li>
            <div className="icon-contact rounded-circle">
            <TfiWorld className='fs-1'/>
            </div>
            <div className="text-contact">
            <p >www.mimosanchurch.com</p>
            </div>
        </li>
      </ul>
        </div>
        <div className="right-section-contact">
        <h2>KEEP IN TOUCH</h2>
        <form>
            <ul className="top-form list-unstyled">
            <li><input type='text' placeholder='your name' className='form-control input-field'/></li>
            <li><input type='email' placeholder='your Email' className='form-control input-field'/></li>
            </ul>
               
               <textarea placeholder='your message' className='send-mes-text form-control'/>

            <button className='btn text-light send-mess-btn'>Send Message</button>
            
        </form>

        </div>
        </div>
  )
}

export default Contactus