import React from "react";
import slide0 from "../../assets/images/fullimg1.jpg";
import slide1 from "../../assets/images/fullimg2.jpg";
import slide2 from "../../assets/images/fullimg3.jpg";
// import slide5 from "../../assets/images/slide2.jpg";
// import slide6 from "../../assets/images/slide2.jpg";
// import slide7 from "../../assets/images/splash1.jpg";

import "./splash.css";
function Splash() {
  const slideArr = [
    slide0,
    slide1,
    slide2,


  ];

  return (
    <div>
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
    {/* <div className="jumbo-positioner">
        <div className="jumbo-center">
          <div className="jumbo-content">
            <h1 className="fs-2">Keeping It Sweaty Since 2020</h1>
            <button class="bn632-hover bn26">Button</button>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
}
export default Splash;