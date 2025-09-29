import styled from "styled-components"

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: grid;
  }

  a div {
    display: flex;
    justify-content: center !important;
  }

  a img {
    margin: auto;
    width: 100% !important;
    height: 80px;
  }

  img {
    max-height: 80px;
    width: 100%;
    object-fit: contain !important;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }

  .slick-slider {
    padding-right: 0 !important;
  }

  .slick-slider .slick-slide div {
    padding: 0;
  }

  .gatsby-image-wrapper {
    /* height: 120px; */
  }

  .slider-tile {
    display: flex !important;
    width: 308px !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 24px !important;
    margin: auto;

    .slider-person {
      display: flex;
      align-items: center;
      gap: 24px;

      .slider-image {
        display: flex;
        padding-top: 5.5px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        border-radius: 800px;
        height: 96px;
        width: 77px;
        box-sizing: border-box;
        border: 1.6px solid #302c29;
        background: linear-gradient(
          180deg,
          rgba(23, 23, 23, 0) 0%,
          #171717 100%
        );
      }

      .slider-person-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 4px;
      }
    }
  }

  .slick-dots {
    bottom: -58px;
    z-index: 2;
    display: flex !important;
    align-items: center;
    padding: 6px;
    gap: 6px;
    border-radius: 500px;
    border: 1px solid #302c29;
    background: #1f140c;
    width: fit-content;
    box-sizing: border-box;
    left: 50%;
    transform: translateX(-50%);
  }

  .slick-dots li {
    margin: 0;
    width: 8px;
    height: 8px;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 100px;
    opacity: 0.4;
    background: #5b483a;
  }

  .slick-dots .slick-active {
    width: 28px;
  }

  .slick-dots .slick-active button {
    width: 28px;
    background: linear-gradient(
        129deg,
        rgba(231, 98, 32, 0) 35.85%,
        rgba(231, 98, 32, 0.2) 72.26%
      ),
      linear-gradient(
        0deg,
        rgba(230, 105, 40, 0.1) 0%,
        rgba(230, 105, 40, 0.1) 100%
      ),
      linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
    background-blend-mode: color-dodge, normal, normal;
    box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
      0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
  }

  @media only screen and (max-width: 1130px) {
    .slick-dots {
      bottom: -38px;
    }
  }

  @media only screen and (max-width: 450px) {
    .slider-tile {
      width: 275px !important;
    }
  }
`
