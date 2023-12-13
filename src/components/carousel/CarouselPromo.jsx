import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselPromo = () => {

  return (
    <Carousel className="mt-2 mb-2">
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src="/image-01.webp" alt="Promo 1"/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src="/image-02.webp" alt="Promo 2"/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src="/image-03.webp" alt="Promo 3"/>
      </Carousel.Item>
    </Carousel>
  )
};


