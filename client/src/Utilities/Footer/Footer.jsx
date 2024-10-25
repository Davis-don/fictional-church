import React from 'react'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/Guardian Angel.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall ,IoIosMail } from "react-icons/io";
import { FaTwitter,FaFacebookF } from "react-icons/fa";


function Footer() {
  return (
    <div className='overall-footer-section'>
        <div className="left-footer footer-card">
     <div className="logo-footer">
      <div className="logo-img">
        <img className='container-fluid rounded-circle' src={logo} alt='image of gurdian'/>
      </div> 
      <ul className='list-unstyled ul-list-footer'>
        <li ><span><FaLocationDot className='text-danger fs-4 m-1' /></span><span className='text-light fs-5'>10100 Kamakwa Rd, Nyeri, Kenya</span></li>
        <li><span><IoIosCall className='text-danger fs-4 m-1'/></span><span className='text-light fs-5'>+1 234 800 8080</span></li>
        <li><span><IoIosMail className='text-danger fs-4 m-1'/></span><span className='text-light fs-5'>info.deercreative@gmail.com </span></li>
      </ul>
     </div>
        </div>
        <div className="center-footer footer-card">
      <h1 className='text-light'>Guardian Angels Tetu Catholic Parish</h1>
      <ul  className='list-unstyled links-ul-footer'>
        <li className='text-light'>Home</li>
        <li className='text-light'>About</li>
        <li className='text-light'>Events</li>
        <li className='text-light'>Gallery</li>
        <li className='text-light'>Contact</li>
        <li className='text-light'>Churches</li>
        <li className='text-light'>Catechism</li>

      </ul>
        </div>
        <div className="right-footer footer-card">
          <ul className='list-unstyled icons-ul-contact-footer'>
            <li className='text-light fs-1'><FaTwitter /></li>
            <li className='text-light fs-1'><FaFacebookF /></li>
          </ul>
        </div>
        </div>
  )
}

export default Footer