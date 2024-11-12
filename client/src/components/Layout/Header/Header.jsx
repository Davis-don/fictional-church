import React from "react";
import "./header.css";
import logo from "../../../assets/Guardian Angel.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import useSideStateStore from "../../../Store/sidebarState";

function Header() {
  const setSidbarTrue = useSideStateStore((state)=>state.sidebarToggle)
  return (
    <div className="overall-header-container">
      <div className="left-header">
     <div className="logo-icon">
      <img src={logo} alt="gurdian angel" className="rounded-circle"/>
     </div>
     <div className="church-name">
       <h1 className="logo-name">Guardian Angels Tetu Catholic Parish</h1>
     </div>
      </div>
      <div className="right-header">
        <div onClick={()=>setSidbarTrue()}  className="menu-icon">
          <CiMenuBurger className="actual-menu-icon"/>
        </div>
        <div className="nav-links">
        <ul className="list-unstyled">
     <li><Link to = '/'>HOME</Link></li>
     <li><Link to = '/about'>ABOUT</Link></li>
     <li><Link to = '/sermons'>SERMONS</Link></li>
     <li><Link to = '/events'>EVENTS</Link></li>
     <li><Link to = '/churches'>CHURCHES</Link></li>
     <li><Link to = '/contact'>CONTACT</Link></li>
     </ul>
        </div>
        <div className="login-btn">
       <button className="btn ">Login</button>
        </div>
     
      </div>
    </div>
  );
}

export default Header;
