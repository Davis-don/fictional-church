import React from "react";
import "./abouthmpg.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fatherImg from "../../../../assets/father-img.jpg";

function Abouthomepg() {
  return (
    <div className="overall-homepage-about">

    
      <h1 className="abt-hmpg-heading-main">welcome to our church</h1>
      <p className="hmpg-p-abt text-secondary">It's the start of an amazing journey of faith</p>
      <div className="cards-holder-abt-homepage">
       {/* Start of left side */}
      <div className="left-side-img-hmpg ">
        <div className="image-container-div">
          <img
            src={fatherImg}
            alt=" image of priest"
            />
        </div>
      </div>
      {/* End of left side */}

      
      {/* start of right side */}

      <div className="right-side-img-hmpg ">
        <div className="right-side-content-holders">

        <h1 className="text-light about-title-heading text-dark">Father's Message!</h1>
        <h2 className="second-title-heading text-dark">
          (Fr.,Rev. Patrick Maina Mwangi)
        </h2>
        <div className="bottom-text-items">
        <p className="about-paragraph container-fluid text-secondary">
        Dear Fellow Parishioners and Persons of Good will, Peace of our Lord
          be upon you. Allow me welcome you warmly to our Parish Website. I am
          glad you have visited us online. This is our family website. It is yet
          another God given forum to spread the gospel of our Lord and
          strengthen our faith in Christ Jesus. It is a means of communication
          through which we wish to reach all our Tetu Catholics, those within
          the Parish territory and those ones in the “diaspora'. We wish to.....
        
        </p>
        </div>
        <div className="btn-read-container">
        <button className="btn read-more-btn btn-outline-danger">Read more</button>
        </div>
        


        </div>
        
        
        
        
        
      </div>
      {/* End of right side */}
      </div>
      
    </div>
  );
}

export default Abouthomepg;
