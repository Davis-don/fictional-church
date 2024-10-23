import React from "react";
import "./abouthmpg.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fatherImg from "../../../../assets/father-img.jpg";

function Abouthomepg() {
  return (
    <div className="overall-homepage-about container">
      {/* Start of left side */}
      <div className="left-side-img-hmpg ">
        <div className="image-container-div">
          <img
            src={fatherImg}
            alt=" image of priest"
            className="container-fluid"
          />
        </div>
      </div>
      {/* End of left side */}

      {/* start of right side */}

      <div className="right-side-img-hmpg ">


        <h1 className="text-light about-title-heading text-dark">Father's Message!</h1>
        <h2 className="second-title-heading text-dark">
          (Fr.,Rev. Patrick Maina Mwangi)
        </h2>
        <p className="about-paragraph container-fluid text-dark">
          Dear Fellow Parishioners and Persons of Good will, Peace of our Lord
          be upon you. Allow me welcome you warmly to our Parish Website. I am
          glad you have visited us online. This is our family website. It is yet
          another God given forum to spread the gospel of our Lord and
          strengthen our faith in Christ Jesus. It is a means of communication
          through which we wish to reach all our Tetu Catholics, those within
          the Parish territory and those ones in the “diaspora'. We wish to
          deliver our Parish announcements to your doorstep through this
          website, so should you not get the hardcopies on any of Sundays,
          please turn to the website and get informed. We also wish to share the
          Word of God on this website. For those of you, who like to get daily
          reflections and materials that strengthen both you as a Christian and
          as a person, please visit us here constantly. On this page us well, we
          shall publish information that reaches our office from our Archdiocese
          and from the Bishops office. So Karibu sana and let us walk together
          in the Journey of faith. If you see some room of improvement, feel
          free to write to me on info@tetucatholic.org. May our Lord Bless you
          always.
        </p>
        
      </div>
      {/* End of right side */}
    </div>
  );
}

export default Abouthomepg;
