import React from 'react'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../../assets/Guardian Angel.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall ,IoIosMail } from "react-icons/io";
import { FaTwitter,FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Footer() {
  const navigate = useNavigate()
  return (
    <div className='overall-footer-section'>
        <div className="left-footer footer-card">
     <div className="logo-footer">
      <div className="logo-img">
        <img className='container-fluid rounded-circle' src={logo} alt='image of gurdian'/>
      </div> 
      <ul className='list-unstyled ul-list-footer'>
        <li ><span><FaLocationDot className='text-danger fs-4 m-1' /></span><span className='text-light fs-5'>10100 Kamakwa Rd, Nyeri, Kenya</span></li>
        <li><span><IoIosCall className='text-danger fs-4 m-1'/></span><span className='text-light fs-5'>+254 702 722 812</span></li>
        <li><span><IoIosMail className='text-danger fs-4 m-1'/></span><span className='text-light fs-5'>info@tetucatholic.org </span></li>
      </ul>
     </div>
        </div>
        <div className="center-footer footer-card">
      <h1 className='text-light'>Guardian Angels Tetu Catholic Parish</h1>
      <ul className='list-unstyled links-ul-footer'>
  <li
    style={window.location.pathname === '/' ? { textDecoration: 'underline' } : {}}
    className='text-light'
    onClick={()=>navigate('/')}
  >
    Home
  </li>
  <li
    style={window.location.pathname === '/about' ? { textDecoration: 'underline' } : {}}
    className='text-light'
    onClick={()=>navigate('about')}
  >
    About
  </li>
  <li
    style={window.location.pathname === '/sermons' ? { textDecoration: 'underline' } : {}}
    className='text-light'
    onClick={()=>navigate('/sermons')}
  >
    Sermons
  </li>
  <li
    style={window.location.pathname === '/events' ? { textDecoration: 'underline' } : {}}
    className='text-light'
    onClick={()=>navigate('/events')}
  >
    Events
  </li>
  <li
    style={window.location.pathname === '/contact' ? { textDecoration: 'underline' } : {}}
    className='text-light'
    onClick={()=>navigate('/contact')}
  >
    Contact
  </li>
  <li
    style={window.location.pathname === '/churches' ? { textDecoration: 'underline' } : {}}
    className='text-light'
    onClick={()=>navigate('/churches')}
  >
    Churches
  </li>
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