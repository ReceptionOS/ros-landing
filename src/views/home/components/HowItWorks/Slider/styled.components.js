import styled from "styled-components"
import BackgroundImage from "../../../../../images/how-it-works/hiw-background.webp"

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

  .slick-slider {
    padding-right: 0 !important;
  }

  .slick-slider .slick-slide div {
    padding: 0;
  }

  .slider-tile {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    /* gap: 30px !important; */
    margin: auto;
    /* width: 570px; */
    /* height: calc(358px + 128px); */

    .slider-tile-left {
      display: flex;
      flex-direction: column;
    }

    .slider-tile-left-top {
      height: 64px;
      border-right: 1px solid #302c29;
      display: flex;

      p {
        color: #ffe8d9;
        margin: auto 32px;
      }
      input {
        margin: auto;
        pointer-events: none;
      }

      /*********** Baseline, reset styles ***********/
      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        width: 270px;
      }

      /* Removes default focus */
      input[type="range"]:focus {
        outline: none;
      }

      /******** Chrome, Safari, Opera and Edge Chromium styles ********/
      /* slider track */
      input[type="range"]::-webkit-slider-runnable-track {
        background-color: #221e1b;
        border-radius: 500px;
        height: 6px;
      }

      /* slider thumb */
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: 0px; /* Centers thumb on the track */
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
          linear-gradient(
            180deg,
            rgba(13, 7, 2, 0) 0%,
            rgba(115, 59, 21, 0.2) 100%
          );
        background-blend-mode: color-dodge, normal, normal;
        box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
          0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
        border-radius: 500px;
        height: 6px;
        width: 90px;
      }

      input[type="range"]:focus::-webkit-slider-thumb {
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
          linear-gradient(
            180deg,
            rgba(13, 7, 2, 0) 0%,
            rgba(115, 59, 21, 0.2) 100%
          );
        background-blend-mode: color-dodge, normal, normal;
        box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
          0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
        outline-offset: 0.125rem;
      }

      /*********** Firefox styles ***********/
      /* slider track */
      input[type="range"]::-moz-range-track {
        background-color: #221e1b;
        border-radius: 500px;
        height: 6px;
      }

      /* slider thumb */
      input[type="range"]::-moz-range-thumb {
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
          linear-gradient(
            180deg,
            rgba(13, 7, 2, 0) 0%,
            rgba(115, 59, 21, 0.2) 100%
          );
        background-blend-mode: color-dodge, normal, normal;
        box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
          0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
        border: none; /*Removes extra border that FF applies*/
        border-radius: 500px;
        height: 6px;
        width: 90px;
      }

      input[type="range"]:focus::-moz-range-thumb {
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
          linear-gradient(
            180deg,
            rgba(13, 7, 2, 0) 0%,
            rgba(115, 59, 21, 0.2) 100%
          );
        background-blend-mode: color-dodge, normal, normal;
        box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
          0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
        outline-offset: 0.125rem;
      }
    }

    .text-border {
      height: 340px;
    }

    .text-container {
      display: flex;
      /* width: 278px; */
      flex-direction: column;
      align-items: flex-start;
      vertical-align: middle;
      gap: 18px;
      padding: 0 32px !important;
      margin: auto;
    }

    .slider-tile-right {
      background-size: cover !important;
      background-position: bottom;
      background-image: url(${BackgroundImage});
      background-attachment: scroll;
      display: flex;
      flex-direction: row;

      .video-space-side {
        width: 30px;
        display: flex;
        flex-direction: column;

        .side-1,
        .side-3 {
          height: 64px;
        }

        .side-2 {
          height: 339px;
          border-top: 1px solid #302c29;
          border-bottom: 1px solid #302c29;
        }
      }

      .slider-tile-right-top,
      .slider-tile-right-bottom {
        height: 64px;
        border-top: none;
        border-bottom: none;
      }

      .slider-tile-right-top {
        .left-top,
        .right-top {
          display: none;
        }
      }

      .slider-tile-right-bottom {
        .left-bottom,
        .right-bottom {
          display: none;
        }
      }

      .video-space-middle {
        .slider-video {
          height: 338px;

          video {
            height: 337px;
          }
        }
      }
    }
  }

  .slick-arrow {
    top: 32px;
    z-index: 2;
  }

  .slick-prev {
    left: 400px;
  }

  .slick-next {
    left: 435px;
  }

  @media only screen and (max-width: 1324px) {
    .slick-prev {
      left: 280px;
    }

    .slick-next {
      left: 315px;
    }
  }
`
