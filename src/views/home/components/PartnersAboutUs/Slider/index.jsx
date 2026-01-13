import React from 'react';
import Slider from 'react-slick';
import { SliderContainer } from './styled.components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false
  };

  const renderItems = items?.map((item, index) => {
    return (
      <div key={index} className="slider-tile">
        <p className='p-new-model-18'>{item.desc}</p>
        <div className='slider-person'>
          {item.img}
          <div className='slider-person-data'>
            <p style={{ fontWeight: 500 }} className='p-new-model-16'>{item.name}</p>
            {item.position.map((position, index) => (
              <p key={index} className='p-new-model-14'>{position}</p>
            ))}
            <p className='p-new-model-14'>{item.company}</p>

          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <SliderContainer>
        <Slider {...settings}>{renderItems}</Slider>
      </SliderContainer>
    </section>
  );
};

export default SliderComponent;
