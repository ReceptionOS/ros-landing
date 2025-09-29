import styled from "styled-components"
import BackgroundImageFade1 from "../../../../images/compare/fade1-background.webp"
import BackgroundImageFade2 from "../../../../images/compare/fade2-background.webp"

export const CompareComponent = styled.div`
  display: flex;
  flex-direction: column;

  .top-title {
    display: flex;
    max-width: 960px;
    margin: auto auto 60px auto;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  .compare-buttons-container {
    display: inline-flex;
    padding: 2px;
    align-items: center;
    gap: 2px;
    border-radius: 500px;
    border: 1px solid #302c29;
    background: #1f140c;
    box-sizing: border-box;
    margin: auto;
    margin-bottom: -27px;
    z-index: 2;

    .compare-sides {
      display: flex;
      height: 48px;
      padding: 0 24px;
      justify-content: center;
      align-items: center;
      gap: 12px;
      color: #ffe8d9;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;

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

      transition: background-color 0.3s ease-in-out;
    }

    .compare-inactive {
      cursor: pointer;
      background: #1f140c;

      &:hover {
        background-color: rgba(230, 105, 40, 0.1);
      }

      @media only screen and (max-width: 1130px) {
        &:hover {
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
        }
      }
    }

    .compare-left {
      border-radius: 500px 0 0 500px;
    }
    .compare-right {
      border-radius: 0 500px 500px 0;
    }
  }

  .fade-wrap {
    position: relative;
  }

  .fade-wrap .fade {
    position: absolute;
    inset: 0; /* top:0; right:0; bottom:0; left:0 */
    width: 100%;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s linear;
  }

  .fade-wrap .fade.show {
    pointer-events: auto;
    opacity: 1;
  }

  .fade-1,
  .fade-2 {
    width: calc(50% + 68px);
    box-sizing: border-box;
    margin: auto;
    text-align: center;
    background-color: var(--Black);
    background-size: cover !important;
    display: block;
    background-attachment: scroll;
    justify-content: center;
  }

  .fade-1 {
    height: 260px;
    border-bottom: none;
    background-position: bottom;
    background-image: url(${BackgroundImageFade1});

    > div {
      margin-top: 79px;
    }
  }

  .fade-2 {
    height: 226px;
    z-index: 2;
    background-position: top;
    background-image: url(${BackgroundImageFade2});

    h4 {
      margin: 40px auto 16px auto;
      max-width: 284px;
    }

    p {
      max-width: 340px;
      margin: 0 auto;
    }
  }

  .calendar {
    width: 248px;
    z-index: 1;

    img {
      width: 248px;
    }
  }

  @media only screen and (max-width: 1130px) {
    .fade-1,
    .fade-2 {
      width: calc(80% + 68px);
    }
  }
`
