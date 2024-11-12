import React from 'react'
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosClose } from "react-icons/io";
import useSideStateStore from '../../../Store/sidebarState';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const Navigate= useNavigate()
  const toggleSideBar = useSideStateStore((state)=>state.sidebarToggle)
  return (
    <div className='overall-sidebar-container'>
      <div onClick={()=>toggleSideBar()} className="close-btn-here">
      <IoIosClose className='actual-close-icon' />
      </div>
      <div className="nav-links-holder-div">
        <ul className='list-unstyled'>
          <li onClick={()=>{Navigate("/");toggleSideBar()}}>Home</li>
          <li onClick={()=>{Navigate("/about");toggleSideBar()}}>About</li>
          <li onClick={()=>{Navigate("/sermons");toggleSideBar()}}>Sermons</li>
          <li onClick={()=>{Navigate("/events");toggleSideBar()}}>Events</li>
          <li onClick={()=>{Navigate("/churches");toggleSideBar()}}>Churches</li>
          <li onClick={()=>{Navigate("/contact");toggleSideBar()}}>Contact</li>
        </ul>
        </div>
        </div>
  )
}

export default Sidebar