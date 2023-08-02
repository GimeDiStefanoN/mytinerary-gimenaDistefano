//import React from 'react'
import './Carrousel.css';
import cities from '../../data/cities.json';

const Carrousel = () => {
    const slides = [
      {
        id: 'slide1',
        cities: cities.cities.slice(0, 4),
      },
      {
        id: 'slide2',
        cities: cities.cities.slice(4, 8),
      },
      {
        id: 'slide3',
        cities: cities.cities.slice(8, 12),
      },
    ];
  
    return (
      <>
        <h2 className="titleCarousel">Popular Mytineraries</h2>
  
        <div className="carousel w-full">
          {slides.map((slide) => (
            <div key={slide.id} id={slide.id} className="carousel-item relative w-full">
              {slide.cities.map((city) => (
                <div key={city.nombre} className="image-container">
                  <img src={city.img} className="w-full" alt={city.nombre} />
                  <div className="city-overlay">
                    <h3 className='cityCarrousel'>{city.nombre}</h3>
                    <p>{city.pais}</p>
                  </div>
                </div>
              ))}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${slides[(slides.findIndex(s => s.id === slide.id) + slides.length - 1) % slides.length].id}`} className="btn btn-circle">❮</a>
                <a href={`#${slides[(slides.findIndex(s => s.id === slide.id) + 1) % slides.length].id}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

export default Carrousel