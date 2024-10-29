import React from "react";
import "./header.css";
import logo from "../../assets/Guardian Angel.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="overall-header-section">
      <div className="header-content-holders container-fluid">
        <div className="logo-name-left">
          <div className="logo-image">
            <img src={logo} alt="Jesus Christ" className="rounded-circle" />
          </div>
          <div className="brand-name">
            <h1>Fictional Church</h1>
          </div>
        </div>
        <div className="logo-name-right">
          <ul className="list-unstyled nav-links-ul">
          <li className="link-item"><Link to = '/'>Home</Link></li>
            <li className="link-item"><Link to = '/about'>About</Link></li>
            <li className="link-item">Churches</li>
            <li className="link-item">Catechism</li>
            <li className="link-item">Events</li>
            <li className="link-item">Gallery</li>
            <li className="link-item">Contact</li>
            <li>
              <button
                style={{
                  fontSize: "2rem",
                  backgroundImage: "var(---btn-color-gradient)",
                }}
                className="btn login-btn text-light"
                type="button"
              >
                Login
              </button>
            </li>
          </ul>

          <div className="menu-icon">
            <button className="btn" type="button">
              Login
            </button>
            <CiMenuBurger className="actual-menu-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
