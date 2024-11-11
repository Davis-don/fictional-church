import React, { useRef } from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carosel from '../../components/Carosel/Carosel';
import { FaArrowDown } from "react-icons/fa";
import Abouthomepg from '../../components/Aboutsection/Abouthomepg';
import Countercards from '../../components/Aboutsection/Countercards';
import Massorder from '../../components/Massorder/Massorder';

function Homescreen() {
  
  const aboutSectionRef = useRef(null);


  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='overall-homescreen-container'>
      {/* Start of hero section */}
      <div className="homepage-hero-section">
        <div className="carosel-container">
          <Carosel />
        </div>

        
        <div className="scroll-btn" onClick={scrollToAboutSection}>
          <FaArrowDown className='actual-btn-arrow' />
        </div>
      </div>
      {/* End of hero section */}
   
        {/* Start of about section */}
      
      <div className="about-section" ref={aboutSectionRef}>
        <Abouthomepg/>
      </div>
      {/* End of about section */}

      {/* Start of statisctics section */}
      <div className="statistics-home-section">
        
      <Countercards/>
    </div>
    {/* End of statistics section */}
    {/* Start of mass order section */}
    <div className="mass-order-home">
      <Massorder/>
    </div>
    {/* End of massorder section */}

    </div>
      );
}

export default Homescreen;

