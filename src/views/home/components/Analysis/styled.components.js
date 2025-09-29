import styled from "styled-components"

export const AnalysisComponent = styled.div`
  .analysis-container {
    width: 50%;
    box-sizing: border-box;
    margin: auto;
    padding: 60px 0;
    text-align: center;
    position: relative;

    .background-a {
      position: absolute;
      width: 150%;
      left: 50%;
      transform: translateX(-50%);
      top: -60px;
      z-index: -1;
    }

    .top-title {
      display: flex;
      max-width: 476px;
      margin: auto;

      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    .middle-text {
      display: flex;
      max-width: 261px;
      margin: auto;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding-top: 48px;

      .inner-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        align-self: stretch;
        padding-bottom: 32px;

        p {
          color: #ffe8d9;
        }
      }
    }
  }

  @media only screen and (max-width: 1130px) {
    .analysis-container {
      width: 80%;

      .background-a {
        width: 100%;
      }

      .left,
      .right {
        z-index: -1;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .analysis-container {
      .background-a {
        width: 130%;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .analysis-container {
      .background-a {
        top: 50px;
      }
    }
  }
`
