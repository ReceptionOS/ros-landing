import styled from "styled-components"
import BackgroundImage from "../../../../images/how/how-background.webp"
import BackgroundImageMobile from "../../../../images/how/how-background_mobile.webp"

export const HowItWorksComponent = styled.div`
  overflow: hidden;
  background-size: contain !important;
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
  background-image: url(${BackgroundImage});
  display: block;
  background-attachment: scroll;
  justify-content: center;

  .hiw-text {
    max-width: calc(1080px - 66px);
    height: 245px;
    margin: auto;
  }

  .top-tile {
    display: flex;
    margin: 35px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    max-width: 650px;
  }

  @media only screen and (max-width: 1324px) {
    .hiw-text {
      max-width: calc(964px - 66px);
    }
  }

  @media only screen and (max-width: 1130px) {
    background-image: url(${BackgroundImageMobile});
    .top-tile {
      margin: 44px auto;
      max-width: 240px;
    }
  }
`

export const HowItWorksSliderComponent = styled.div`
  height: 500px;

  .slick-slider {
    height: 500px;
  }
`

export const HowItWorksGridComponent = styled.div`
  display: flex;
  flex-direction: column;

  .video-container {
    width: 572px;
    margin: auto;

    .border-container-4-rows {
      border-bottom: none;
      border-top: none;
    }

    .row0 {
      border-top: 1px solid #302c29;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    padding: 32px 55px 32px 24px;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 650px) {
    .video-container {
      width: 352px;
    }
  }

  @media only screen and (max-width: 400px) {
    .video-container {
      width: 322px;
    }
  }
`
