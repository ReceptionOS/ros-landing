import styled from "styled-components"

export const WhyUsComponent = styled.div`
  .why-us-wrapper {
    padding: 0 20px;
  }
  .why-us-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    margin-bottom: 64px;
    max-width: 654px;
    margin-left: auto;
    margin-right: auto;

    .why-us-title {
      font-size: 48px;
      font-weight: 400;
      line-height: 56px; /* 116.667% */
      letter-spacing: -0.72px;
      padding-bottom: 2px;
    }

    p {
      white-space: pre-line;
    }
  }

  .why-us-subtitle {
    text-align: center;
    font-size: 32px;
    line-height: 40px; /* 125% */
    letter-spacing: -0.36px;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 auto;
    padding: 32px 0px;
    max-width: 894px;
    border-top: 1px solid #302c29;
    border-right: 1px solid #302c29;
    border-left: 1px solid #302c29;
  }

  .why-us-pros-cons-wrapper {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    width: 100%;
    max-width: 798px;
    margin: 32px auto 0;
  }

  .borders-mobile {
    display: none;
  }

  .why-us-lines-container {
    max-width: 395px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;

    .items {
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
        min-width: 0;
      }

      .item-cons {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        color: rgba(255, 232, 217, 0.5);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }

      .item-pros {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        color: #ffe8d9;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }

      svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        margin-top: 2px;
      }
    }

    .title {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      background: linear-gradient(
        180deg,
        #fff8f3 0%,
        rgba(255, 232, 217, 0.7) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .why-us-tile-container {
    display: grid;
    grid-template-columns: repeat(3, 298px);
    row-gap: 31px;
    position: relative;
    justify-content: center;

    .why-us-image {
      flex-shrink: 0;
    }
  }

  .why-us-empty {
    position: absolute;
    top: 229px;
    height: 31px;
    width: 339px;
    border: 2px solid #302c29;
    border-top: none;
    border-bottom: none;
  }

  .why-us-left-empty {
    left: 0;
  }

  .why-us-middle-empty {
    left: 341px;
    border-left: none;
  }

  .why-us-right-empty {
    left: calc(341px * 2);
    border-left: none;
  }

  .why-us-tile {
    flex: 1 1 0;
    height: 228px;
    box-sizing: border-box;

    .p-new-model-18 {
      color: #ffe8d9;
    }
  }

  .why-us-tile-content {
    display: flex;
    padding: 32px 48px 0 24px !important;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .why-us-text-tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .why-us-mobile {
    display: none;
  }

  .why-us-mobile {
    .ai-wave-tile {
      flex: 1 1 0;
      height: 228px;
      box-sizing: border-box;

      .p-new-model-18 {
        color: #ffe8d9;
      }
    }

    .tile-content {
      display: flex;
      padding: 32px 48px 0 24px !important;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .text-tile {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  .divider {
    max-width: 894px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1130px) {
    .why-us-container {
      margin-bottom: 64px;

      .why-us-title {
        font-size: 32px;
        line-height: 32px; /* 100% */
        letter-spacing: -0.72px;
      }
    }

    .why-us-pros-cons-wrapper {
      margin: 0 auto 0;
    }

    .why-us-tile-container.desktop {
      display: none;
    }

    .why-us-subtitle {
      font-size: 28px;
      line-height: 32px;
      border-right: none;
      border-left: none;
      white-space: pre-line;
    }

    .why-us-lines-container {
      max-width: none !important;
      padding: 24px;
      width: 100%;
      box-sizing: border-box;

      .title {
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }
    }

    .why-us-mobile {
      display: block;
    }

    .why-us-pros-cons-wrapper {
      gap: 0;
      padding: 0;
      margin-bottom: 0;
    }

    .items {
      p {
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .item-cons,
      .item-pros {
        align-items: flex-start;
      }

      svg {
        flex-shrink: 0;
        margin-top: 2px;
      }
    }

    .why-us-tile-container {
      grid-template-columns: repeat(3, 302px);
      margin-top: 48px;
    }

    .why-us-empty {
      width: 300px;
    }

    .why-us-middle-empty {
      left: 302px;
    }

    .why-us-right-empty {
      left: calc(302px * 2);
    }
  }

  @media only screen and (max-width: 890px) {
    .why-us-pros-cons-desktop {
      display: none;
    }

    .borders-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgba(255, 232, 217, 0.5);
      max-width: 768px;
      margin: 0 auto;
      overflow: hidden;
      position: relative;

      .border-top {
        width: 100%;
        max-width: 100%;
      }

      .pros-cons-wrapper {
        display: flex;
        gap: 0;
        width: 100%;
        padding: 0;
      }

      .rows {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }

      .why-us-lines-container {
        max-width: none !important;
        padding: 24px;
        width: 100%;
        box-sizing: border-box;

        .title {
          white-space: normal;
          overflow-wrap: anywhere;
          word-break: break-word;
        }
      }

      .items {
        p {
          white-space: normal;
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .item-cons,
        .item-pros {
          align-items: flex-start;
        }

        svg {
          flex-shrink: 0;
          margin-top: 2px;
        }
      }
    }
  }

  @media only screen and (max-width: 578px) {
    .why-us-pros-cons-wrapper {
      flex-direction: column;
    }

    .borders-mobile {
      .pros-cons-wrapper {
        flex-direction: column;
      }
    }
  }
`
