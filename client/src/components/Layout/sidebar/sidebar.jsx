import React from 'react'
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosClose } from "react-icons/io";
import useSideStateStore from '../../../Store/sidebarState';
function Sidebar() {
  const toggleSideBar = useSideStateStore((state)=>state.sidebarToggle)
  return (
    <div className='overall-sidebar-container'>
      <div onClick={()=>toggleSideBar()} className="close-btn-here">
      <IoIosClose className='actual-close-icon' />
      </div>
      <div className="nav-links-holder-div">
        <ul className='list-unstyled'>
          <li>Home</li>
          <li>About</li>
          <li>Sermons</li>
          <li>Events</li>
          <li>Churches</li>
          <li>Contact</li>
        </ul>
        </div>
        </div>
  )
}

export default Sidebar