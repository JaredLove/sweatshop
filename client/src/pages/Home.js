import React from "react";
// import ImageSlider from "../components/Slider";
// import crew1 from "../assets/images/sscew.jpg";
// import crew2 from "../assets/images/ssphoto.jpg";
// import crew3 from "../assets/images/WoWScrnShot_030522_215717.jpg";
// import crew4 from "../assets/images/WoWScrnShot_122721_224517.jpg";
import logo from "../assets/images/highres.png";
import video from "../assets/videos/final.mp4";
const Home = () => {
  // const images = [crew1, crew2, crew3, crew4];

  return (
    <div className="home-container">
        {/* <div className="slider">
              <ImageSlider images={images} /> 
          </div>       */}
        <div className="video-container">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
        <div className="home-header">
          <div>
            <img src={logo} alt="logo" className="home-logo" />
          </div>
          <div>
            <h6>
              A New Beginning
            </h6>
            
          </div>          
          <div>
             <h3>
              Keepin' It Sweaty Since 2020
            </h3>
          </div>
          <div>
            <button><a href="#about">Learn More</a></button>
            <button id="outer"><a href="#contact">Join Us</a></button>
          </div>

        </div>

           
      </div>
    
  );
};

export default Home;