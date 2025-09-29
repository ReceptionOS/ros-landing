import styled from "styled-components"
import BackgroundImage from "../../../../images/aiwave/empty.webp"

export const AIWaveContainer = styled.div`
  padding: 80px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-container {
    display: flex;
    margin: 0 auto 60px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;

    p {
      max-width: 553px;
    }
  }

  .tile-container {
    display: grid;
    grid-template-columns: repeat(3, 341px);
    row-gap: 31px;
    position: relative;

    .image {
      flex-shrink: 0;
    }
  }

  .empty {
    position: absolute;
    top: 229px;
    height: 31px;
    width: 339px;
    border: 2px solid #302c29;
    border-top: none;
    border-bottom: none;
  }

  .left-empty {
    left: 0;
  }

  .middle-empty {
    left: 341px;
    border-left: none;
  }

  .right-empty {
    left: calc(341px * 2);
    border-left: none;
  }

  .ai-wave-empty {
    background-size: cover !important;
    width: 100%;
    background-image: url(${BackgroundImage});
    background-attachment: scroll;
  }

  .no-left {
    border-left: none;

    .left-middle {
      display: none;
    }
  }

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

  @media only screen and (max-width: 1324px) {
    .tile-container {
      grid-template-columns: repeat(3, 302px);
    }

    .empty {
      width: 300px;
    }

    .middle-empty {
      left: 302px;
    }

    .right-empty {
      left: calc(302px * 2);
    }
  }

  @media only screen and (max-width: 1130px) {
    padding: 40px 0 0 0;
  }
`
