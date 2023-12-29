import React, { useState, useEffect } from "react";
import ImageSlider from "../components/Slider";
import crew1 from "../assets/images/sscew.jpg";
import crew2 from "../assets/images/ssphoto.jpg";
import crew3 from "../assets/images/WoWScrnShot_030522_215717.jpg";
import crew4 from "../assets/images/WoWScrnShot_122721_224517.jpg";

const Home = () => {
  const images = [crew1, crew2, crew3, crew4];

  return (
    <div className="home-container">
        <div className="slider">
              <ImageSlider images={images} /> 
          </div>      
      

           
      </div>
    
  );
};

export default Home;