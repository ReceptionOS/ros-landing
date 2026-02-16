import styled from "styled-components"

export const FeaturedSectionComponent = styled.div`
  .featured-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 98px;

    .featured-title {
      font-size: 48px;
      font-weight: 400;
      line-height: 56px; /* 116.667% */
      letter-spacing: -0.72px;
    }

    p {
      white-space: pre-line;
    }
  }

  .featured-image-mobile {
    display: none;
  }

  .borders {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 232, 217, 0.5);
  }
  .pros-cons-wrapper {
    padding: 24px 32px;
    display: flex;
    gap: 24px;
    justify-content: space-between;
  }

  .container {
    max-width: 395px;
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .items {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .item-cons {
        display: flex;
        align-items: center;
        gap: 10px;
        color: rgba(255, 232, 217, 0.5);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }

      .item-pros {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ffe8d9;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
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

  .bottom-wrapper {
    padding: 42px 102px 0;

    .title {
      margin-bottom: 12px;

      font-size: 32px;

      font-weight: 400;
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
    }

    .description {
      color: rgba(255, 232, 217, 0.64);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px; /* 150% */
      margin-bottom: 32px;
    }

    .how-it-works {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 18px;
        font-weight: 500;
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
    .content {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 88px;

      p {
        color: rgba(255, 232, 217, 0.64);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
        max-width: 340px;
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 578px) {
    .image {
      display: none !important;
    }

    .featured-image-mobile {
      display: block !important;
    }
  }
`
