import React, { useCallback, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { SliderContainer } from './styled.components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalVideo from '../../../../../components/LocalVideo';
import { BorderContainer4Rows } from '../../../../../components/BorderContainer/BorderContainer4Rows';
import { BorderContainerNoRowsVerticalSides } from '../../../../../components/BorderContainer/BorderContainerNoRowsVerticalSides';
import { BorderContainerNoRowsVerticalSidesLong } from '../../../../../components/BorderContainer/BorderContainerNoRowsVerticalSidesLong';

const SliderComponent = ({ items }) => {
  let sliderRef = useRef(null);
  const prevVideoRef = useRef(null);
  const prevEndedHandlerRef = useRef(null);

  const [slideIndex, setSlideIndex] = useState(1);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <svg className={className}
        style={{ ...style }}
        onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2.92822 9.99995H17.0711M17.0711 9.99995L11.5711 4.5M17.0711 9.99995L11.5711 15.4999" stroke="#FFE8D9" strokeLinejoin="round" />
      </svg>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (

      <svg
        className={className}
        style={{ ...style, opacity: `${slideIndex === 1 ? '0' : '1'}` }}
        onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.0718 9.99995H2.92892M2.92892 9.99995L8.42892 4.5M2.92892 9.99995L8.42892 15.4999" stroke="#FFE8D9" strokeLinejoin="round" />
      </svg>
    );
  }

  const settings = {
    className: "center",
    centerPadding: "50px",
    centerMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    afterChange: () => {
      attachEndedToCurrent();
    },
    beforeChange: (current, next) => setSlideIndex(next + 1),
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const attachEndedToCurrent = useCallback(() => {
    const listEl = sliderRef.current?.innerSlider?.list || sliderRef.current?.list;
    if (!listEl) return;

    const currentVideo = listEl.querySelector(".slick-current video");
    const allVideos = listEl.querySelectorAll("video");

    allVideos.forEach((v) => {
      try {
        if (v !== currentVideo) {
          v.pause();
          v.currentTime = 0;
        }
      } catch (e) {
      }
    });

    if (prevVideoRef.current && prevEndedHandlerRef.current) {
      try {
        prevVideoRef.current.removeEventListener("ended", prevEndedHandlerRef.current);
      } catch (e) { }
      prevVideoRef.current = null;
      prevEndedHandlerRef.current = null;
    }

    if (!currentVideo) return;
    const onEnded = () => {
      try {
        currentVideo.removeEventListener("ended", onEnded);
      } catch (e) { }
      prevVideoRef.current = null;
      prevEndedHandlerRef.current = null;
      sliderRef.current?.slickNext();
    };

    prevVideoRef.current = currentVideo;
    prevEndedHandlerRef.current = onEnded;

    currentVideo.addEventListener("ended", onEnded);
    currentVideo.play().catch(() => {
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => attachEndedToCurrent(), 50);
    return () => {
      clearTimeout(t);
      if (prevVideoRef.current && prevEndedHandlerRef.current) {
        try {
          prevVideoRef.current.removeEventListener("ended", prevEndedHandlerRef.current);
        } catch (e) { }
        prevVideoRef.current = null;
        prevEndedHandlerRef.current = null;
      }
    };
  }, []);

  const renderItems = items?.map((item, index) => {
    return (
      <BorderContainerNoRowsVerticalSidesLong key={index} className="slider-tile">
        <div className='slider-tile-left'>
          <div className='slider-tile-left-top '>
            <p className='p-new-model-18'>0{slideIndex}</p>
          </div>
          <BorderContainerNoRowsVerticalSides className="text-border" >
            <div className='text-container'>
              <h4>{item.title}</h4>
              <p className='p-new-model-16'>{item.description}</p>
            </div>
          </BorderContainerNoRowsVerticalSides>
          <div className='slider-tile-left-top '>
            <input
              onChange={e => sliderRef.current?.slickGoTo?.(Number(e.target.value))}
              value={slideIndex}
              type="range"
              min={1}
              max={items.length}
            />
          </div>
        </div>
        <div className='slider-tile-right'>
          <div className='video-space-side'>
            <div className='side-1'></div>
            <div className='side-2'></div>
            <div className='side-3'></div>
          </div>
          <div className='video-space-middle'>
            <BorderContainer4Rows className='slider-tile-right-top'></BorderContainer4Rows>
            <BorderContainer4Rows>
              <LocalVideo src={item.link} className="slider-video" />
            </BorderContainer4Rows>
            <BorderContainer4Rows className='slider-tile-right-bottom'></BorderContainer4Rows>
          </div>
          <div className='video-space-side'>
            <div className='side-1'></div>
            <div className='side-2'></div>
            <div className='side-3'></div>
          </div>
        </div>
      </BorderContainerNoRowsVerticalSidesLong>
    );
  });

  return (
    <section>
      <SliderContainer>
        <Slider
          ref={sliderRef}
          {...settings}
        >{renderItems}</Slider>
      </SliderContainer>
    </section>
  );
};

export default SliderComponent;
