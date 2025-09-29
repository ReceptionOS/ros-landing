import styled from "styled-components"

export const PriceListComponent = styled.div`
  padding: 30px 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  /* .border-container-bottom-rows-top {
    border-bottom: none;
  }

  .border-container-top-rows-bottom {
    border-top: none;
  } */

  .top-border-container {
    width: 100%;
    box-sizing: border-box;
    height: 30px;
  }

  .counter-container {
    display: inline-flex;
    padding: 2px;
    align-items: center;
    gap: 2px;
    border-radius: 500px;
    border: 1px solid #302c29;
    background: #1f140c;
    width: 152px;
    box-sizing: border-box;
    margin: auto;
    margin-top: -54px;

    .counter-sides {
      display: flex;
      width: 48px;
      height: 48px;
      /* padding: 0 24px; */
      justify-content: center;
      align-items: center;
      gap: 12px;
      /* border-radius: 500px 0 0 500px; */
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

      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

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

    .counter-middle {
      display: flex;
      width: 48px;
      height: 48px;
      /* padding: 0 24px; */
      justify-content: center;
      align-items: center;
      gap: 12px;
      box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
        0 0 3px -1px rgba(255, 255, 255, 0.54) inset;

      color: #ffe8d9;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }

    .counter-left {
      border-radius: 500px 0 0 500px;
    }
    .counter-right {
      border-radius: 0 500px 500px 0;
    }
  }

  .top-container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .bottom-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 16px; */

    .pricing-container {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
    }

    .price-tile {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
      align-self: stretch;
      gap: 56px;
      flex: 1 0 0;
      padding: 24px;
      border-top: none;
      border-bottom: none;

      .price-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }

      .price-bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;

        h3 {
          font-weight: 500;
        }

        span {
          font-size: 24px;
          line-height: 24px;
          height: 24px;
          font-weight: 400;

          @media only screen and (max-width: 1130px) {
            font-size: 16px;
            line-height: 16px;
            height: 16px;
          }
        }
      }

      .list-text {
        color: #a3948b;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1.2px;
        text-transform: uppercase;
      }

      .price-li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;

        svg {
          flex-shrink: 0;
        }
      }
    }
  }

  .bottom-border-container {
    width: 100%;
    box-sizing: border-box;
    height: 0px;
  }

  .price-list-button {
    max-width: 180px;
    margin: auto;
    margin-top: 34px;
  }

  @media only screen and (max-width: 1100px) {
    .bottom-container {
      .pricing-container {
        flex-direction: column;

        .price-tile {
          border-bottom: 1px solid #302c29;
        }
      }
    }
  }

  @media only screen and (max-width: 1130px) {
    .counter-container {
      margin-top: -10%;
    }

    .price-list-button {
      margin-top: 10%;
    }
  }

  @media only screen and (max-width: 900px) {
    .bottom-rows-top-top {
      margin-left: 0px;
    }
    .top-rows-bottom-bottom {
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 700px) {
    .counter-container {
      margin-top: -54px;
    }
    .price-list-button {
      margin-top: 23px;
    }
  }

  @media only screen and (max-width: 380px) {
    .bottom-rows-top-top {
      width: calc(100% + 1px);
    }
    .top-rows-bottom-bottom {
      width: calc(100% + 1px);
    }
  }
`
