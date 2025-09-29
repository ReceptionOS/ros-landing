import React from 'react';
import Slider from 'react-slick';
import { SliderContainer } from './styled.components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ renderItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    className: "center",
    centerMode: true,
    centerPadding: "55px",
    variableWidth: true,
  };

  return (
    <section>
      <SliderContainer>
        <Slider {...settings}>{renderItems}</Slider>
      </SliderContainer>
    </section>
  );
};

export default SliderComponent;
