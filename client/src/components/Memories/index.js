import React, { useState } from 'react';

// import images
import bubba from "../../assets/images/bubbaj.png";
import ciz from "../../assets/images/ciz.jpg";
import dorrise from "../../assets/images/dorrise.png";
import './style.css'; // Import your CSS file

const ImageSlider = () => {
  const images = [bubba, ciz,dorrise]; // Add more image URLs as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${index + 1}`} />
        ))}
      </div>
      <button className="prev" onClick={() => changeSlide(-1)}>Previous</button>
      <button className="next" onClick={() => changeSlide(1)}>Next</button>
    </div>
  );
};

export default ImageSlider;