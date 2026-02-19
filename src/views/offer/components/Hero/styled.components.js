import styled from "styled-components"

export const HeroComponent = styled.div`
  overflow: hidden;
  position: relative;

  .hero-image-container {
    position: absolute;
    width: 1440px;
    height: 578px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }

  .hero-image-container::before,
  .hero-image-container::after {
    content: "";
    position: absolute;
    top: 0;
    width: 64px;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  .hero-image-container::before {
    left: 0;
    background: linear-gradient(90deg, #0a0a0a 0%, rgba(10, 10, 10, 0) 100%);
  }

  .hero-image-container::after {
    right: 0;
    background: linear-gradient(270deg, #0a0a0a 0%, rgba(10, 10, 10, 0) 100%);
  }

  .hero-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    margin-top: 390px;
    margin-bottom: 120px;
    text-align: center;
    max-width: 930px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: pre-line;
    gap: 28px;
  }

  .hero-title {
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: -0.72px;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  .hero-description > p {
    color: rgba(255, 232, 217, 0.64);
    text-align: center;
    font-family: "Inter Tight";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .hero-img-mobile {
    display: none;
  }

  @media only screen and (max-width: 900px) {
    .hero-title {
      font-size: 48px;
      line-height: 56px;
    }
  }

  @media only screen and (max-width: 578px) {
    .hero-img-mobile {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero-img {
      display: none;
    }

    .hero-image-container {
      width: 578px;
      height: 411px;
    }

    .hero-content {
      margin-top: 280px;
      margin-bottom: 80px;
    }

    .hero-title {
      font-size: 36px;
      line-height: 38px; /* 105.556% */
    }

    .hero-description > p {
      font-size: 18px;
      line-height: 24px; /* 133.333% */
      font-weight: 400;
      white-space: normal;
    }

    .hero-image-container::before,
    .hero-image-container::after {
      display: none;
    }
  }
`
