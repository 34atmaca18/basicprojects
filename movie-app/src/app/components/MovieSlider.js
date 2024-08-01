import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide bg-blue-500 text-white">Slide 1</div>
        <div className="slide bg-green-500 text-white">Slide 2</div>
        <div className="slide bg-red-500 text-white">Slide 3</div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
