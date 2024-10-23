import React, { useRef } from "react"; // Combined the imports
import Header from "../../../Utilities/Header/Header";
import "./Homepage.css";
import Carosel from "./Carosel/Carosel";
import Abouthomepg from "./Aboutsection/Abouthomepg";
import { FaArrowDown } from "react-icons/fa";
import Countercards from "./Countercards";

function Homescreen() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overall-homapage-container">
      <div className="header-hero-container">
        <div className="header-homepage">
          <Header />
        </div>
        <div className="carosel-homepage">
          <Carosel />
        </div>
        <div className="scroll-icon-container">
          <FaArrowDown className="arrow-down-icon" onClick={handleScroll} />
        </div>
      </div>

      <div ref={scrollRef} className="about-homepage-container">
        <Abouthomepg />
      </div>
      <div className="counter-cards-container">
     <Countercards/>
      </div>
    </div>
  );
}

export default Homescreen;
