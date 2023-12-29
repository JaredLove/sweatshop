import React, { useState, useEffect } from 'react';
import './style.css'; // Import the CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Effect to automatically change the image every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 10000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="image-slider">
      <div className='btn-background1'> 
        <button onClick={prevImage} className='left-btn'>&lt;</button>
           </div>
      
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />
      <div className='btn-background2'>
        <button onClick={nextImage} className='right-btn'>&gt;</button>
      </div>
        

      
    </div>
  );
};

export default ImageSlider;
