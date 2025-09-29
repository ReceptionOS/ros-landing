import styled from "styled-components"

export const AutopilotComponent = styled.div`
  padding-top: 75px;
  padding-bottom: 40px;
  justify-content: center;
  position: relative;

  .bg-video {
    position: absolute;
    inset: 0;
    width: 100%;
    margin: auto;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .text-container {
    display: flex;
    padding: 60px 16px 0 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;

    h1 {
      width: 600px;
    }

    span {
      padding: 0 120px;
    }

    p {
      width: 411px;
      margin-bottom: 400px;
    }
  }

  .phone-circle {
    cursor: pointer;
    width: 315px;
    img {
      width: 315px;
    }
  }

  .data-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    margin: auto;
    margin-top: 24px;
    max-width: 263px;
  }

  @media only screen and (max-width: 1130px) {
    .bg-video {
      max-width: unset;
    }

    .text-container {
      padding: 60px 0 24px 0;
      h1 {
        width: 100%;
        max-width: 302px;
        box-sizing: border-box;
      }

      span {
        padding: 0;
      }

      p {
        width: 100%;
        max-width: 288px;
        box-sizing: border-box;
      }
    }

    .data-info {
      margin-top: 16px;
    }
  }
  @media only screen and (max-width: 600px) {
    .text-container {
      p {
        margin-bottom: 300px;
      }
    }
  }
`
