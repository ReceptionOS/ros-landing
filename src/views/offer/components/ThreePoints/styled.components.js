import styled from "styled-components"

export const ThreePointsComponent = styled.div`
  .three-points-wrapper {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 48px;
      font-weight: 400;
      line-height: 56px;
      letter-spacing: -0.72px;
      padding-bottom: 2px;
      background: linear-gradient(
        180deg,
        #fff8f3 0%,
        rgba(255, 232, 217, 0.7) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      max-width: 446px;
      text-align: center;
      margin-bottom: 56px;

      .bracket-highlight {
        color: #e76220;
        background: linear-gradient(
          180deg,
          #e76220 0%,
          rgba(231, 98, 32, 0.7) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 4px;

        .bracket-highlight-top-left {
          position: absolute;
          top: 5px;
          left: -4px;
        }

        .bracket-highlight-bottom-right {
          position: absolute;
          bottom: 5px;
          right: -4px;
        }
      }
    }
  }

  .three-points-tile-container {
    display: grid;
    grid-template-columns: repeat(3, 320px);
    row-gap: 31px;
    position: relative;
    justify-content: center;

    .three-points-image {
      flex-shrink: 0;
    }
  }

  .three-points-tile {
    flex: 1 1 0;
    height: 228px;
    box-sizing: border-box;

    .p-new-model-18 {
      color: #ffe8d9;
    }
  }

  .three-points-tile-content {
    display: flex;
    padding: 32px 48px 0 24px !important;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .three-points-text-tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .three-points-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 60px;
    margin-bottom: 160px;

    .three-points-title {
      text-align: center;
      font-size: 32px;
      font-weight: 400;
      line-height: 48px; /* 150% */
      letter-spacing: -0.72px;
      padding-bottom: 2px;
      background: linear-gradient(
        180deg,
        #fff8f3 0%,
        rgba(255, 232, 217, 0.7) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      max-width: 692px;
      margin-bottom: 0;
    }

    .p-new-model-16 {
      margin-top: 8px;
      max-width: 468px;
      text-align: center;

      span {
        color: #ffe8d9;
      }
    }
  }

  .three-points-mobile {
    display: none;

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

  @media only screen and (max-width: 1130px) {
    .three-points-wrapper {
      h2 {
        font-size: 32px;
        line-height: 32px;
        letter-spacing: -0.72px;
        max-width: 308px;
      }
    }

    .three-points-container {
      .three-points-title {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.72px;
        max-width: 600px;
      }

      .p-new-model-16 {
      }
    }

    .three-points-mobile .slick-slider {
      height: 230px !important;
    }

    .three-points-tile-container.desktop {
      display: none;
    }

    .three-points-mobile {
      display: block;
    }
  }

  @media only screen and (max-width: 790px) {
    .three-points-container {
      margin-top: 32px;
      .three-points-pill {
        display: none;
      }

      .p-new-model-16 {
        padding: 0 40px;
        margin-top: 0px;
      }
    }
  }
`
