import styled from "styled-components"

export const ThreePointsComponent = styled.div`
  .three-points-wrapper {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

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
    }
  }

  .three-points-tile-container {
    display: grid;
    grid-template-columns: repeat(3, 298px);
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
        max-width: 306px;
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
`
