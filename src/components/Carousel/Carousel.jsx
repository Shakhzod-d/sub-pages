import React, { useState, useEffect } from "react";

import "./Carousel.css";

export const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slide active" : "slide"}
        >
          <img src={slide} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};
