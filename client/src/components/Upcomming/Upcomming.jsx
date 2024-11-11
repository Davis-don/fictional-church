import React from 'react'
import './upcomming.css'
import imageEvent from '../../assets/swahili.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

function Upcomming() {
  return (
    <div className='Overall-container-upcomming-events'>
        <h1>UPCOMING EVENT</h1>
        <p>Experience God's Presence</p>
        <div className="day-sermon-image">
            <img src={imageEvent} alt='Event image'/>
        </div>
        <div className="sermon-text-box">
            <h2 className='sermon-title'>EXPLORING THE CHRISTIAN FAITH</h2>
            <ul className='list-unstyled'>
                <li><p><span><SlCalender className='text-danger'/></span><span className='text-secondary m-2'>08:00 AM - 11:00 AM</span></p></li>
                <li><p><span><CiLocationOn className='text-danger'/></span><span className='text-secondary m-2'>1195 Lobortis Rd, New Orleans, New Hampshire</span></p></li>
            </ul>
             <p className='text-secondary sermon-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at convallis justo. Suspendisse ut nisl diam. Sed non vehicula sem. Etiam efficitur eros a leo mollis, interdum sodales erat ultricies. Pellentesque in felis sem. Phasellus nunc tellus, suscipit rutrum risus quis, aucibus vel ipsumeu.</p>
        </div>
        </div>
  )
}

export default Upcomming