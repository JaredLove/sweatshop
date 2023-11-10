import React from "react";
import slide0 from "../../assets/images/slide2.jpg";
import slide1 from "../../assets/images/slide2.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide2.jpg";
import slide4 from"../../assets/images/slide2.jpg";
// import slide5 from "../../assets/images/slide2.jpg";
// import slide6 from "../../assets/images/slide2.jpg";
// import slide7 from "../../assets/images/splash1.jpg";

import "./splash.css";
function Splash() {
  const slideArr = [
    slide0,
    slide1,
    slide2,
    slide3,
    slide4,


  ];

  return (
    <div id="splash" className="jumbo-anchor-element back-full-container">
      {slideArr.map((slide, i) => (
        <div className="movieSlide" key={i}>
          <div className="back-container">
            <div
              className={`${
                i % 2 === 0
                  ? "sliding-background-up"
                  : "sliding-background-down"
              }`}
              style={{
                backgroundImage: `url(${slide})`,
              }}
            ></div>
          </div>
        </div>
      ))}
      <div className="jumbo-positioner">
        <div className="jumbo-center">
          <div className="jumbo-content">
          </div>
        </div>
      </div>
    </div>
  );
}
export default Splash;