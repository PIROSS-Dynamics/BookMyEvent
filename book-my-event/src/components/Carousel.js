// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../css/style.css'; // Import CSS
import '../css/Carousel.css';

const Carousel = () => {
  // useState init at 0 and setCurrentSlide to update the variable
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  // an array containing text+image
  const slides = [
    {
      imgSrc: '/images/carousel inscription BDE.png',
      title: 'Organiser vos événements',
      description: 'Réservez des lieux fantastiques et organisez vos événements en toute simplicité grâce à BookMyEvent.',
    },
    {
      imgSrc: '/images/carousel soirée peniche.png',
      title: 'Héberger des événements',
      description: 'Augmentez vos réservations et atteignez une nouvelle audience en devenant un de nos partenaires.',
    },
  ];

  function changeSlide(direction) {
    setDirection(direction === -1 ? 'fade-left' : 'fade-right'); // Set the animation direction
    setCurrentSlide((currentSlide + direction + slides.length) % slides.length); // + slides.length to manage in the good way when we go in negativ
  }


  return (
    <section className="carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.imgSrc} alt={slide.title} />
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn left" onClick={() => changeSlide(-1)}>&#10094;</button>
      <button className="carousel-btn right" onClick={() => changeSlide(1)}>&#10095;</button>
    </section>
  );
};

export default Carousel;
