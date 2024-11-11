import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carosel.css";
import caroselDataHero from "../../Data/caroselhero";
import "bootstrap/dist/css/bootstrap.min.css";

function Carosel() {
  return (
    <Carousel
      className="overall-carosel-container"
      autoPlay
      infiniteLoop
      showThumbs={false}
      interval={4000}
      stopOnHover
      dynamicHeight
      swipeable
      showStatus={false}
    >
      {caroselDataHero.map((itemData) => {
        return (
          <div className="overall-items-carosel-holder">
            <div className="carosel-opacity-regulator"></div>
            <img src={itemData.imgSrc} alt="Image 1" />
            <div className="on-carosel-text-box">
              <h1 className="text-light carosel-heading">
                {itemData.description}
              </h1>
              <p className="text-light carosel-p">{itemData.subDescription}</p>
              <div className="button-container">{itemData.button}</div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Carosel;
