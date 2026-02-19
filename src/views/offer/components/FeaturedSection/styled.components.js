import styled from "styled-components"

export const FeaturedSectionComponent = styled.div`
  .featured-wrapper {
    padding: 0 20px;
  }
  .featured-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
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

  .borders-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 232, 217, 0.5);
  }

  .borders-mobile {
    display: none;
  }
  .pros-cons-wrapper {
    padding: 24px 32px;
    display: flex;
    gap: 24px;
    justify-content: space-between;
    width: 100%;
  }

  .lines-container {
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

      p {
        white-space: nowrap;
        overflow-wrap: anywhere;
        word-break: break-word;
        min-width: 0;
      }

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

  .rows {
    width: 100%;
    max-width: 100%;
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
  @media only screen and (max-width: 890px) {
    .borders-desktop {
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
    }

    .border-top {
      width: 100%;
      max-width: 100%;
    }

    .border-bottom {
      width: 100%;
      max-width: 100%;
    }

    .featured-container {
      margin-bottom: 64px;

      .featured-title {
        font-size: 32px;
        line-height: 32px; /* 100% */
        letter-spacing: -0.72px;
      }
    }

    .borders-mobile {
      .lines-container {
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

      .description {
        margin-bottom: 16px !important;
      }

      .bottom-wrapper {
        text-align: center;
        padding: 48px 36px;

        > .title {
          font-size: 28px;
          line-height: 32px; /* 114.286% */
          
        }
      }

      .how-it-works {
        align-items: center;

        > .title {
          display: none;
        }
      }

      .pros-cons-wrapper {
        gap: 0;
        padding: 0;
      }

      .rows {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
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

      .content {
        margin-bottom: 0px;
      }

      .content {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 12px;

        p {
          max-width: none !important;
        }
      }
    }
  }

  @media only screen and (max-width: 578px) {
    .pros-cons-wrapper {
      flex-direction: column;
    }
    .image {
      display: none !important;
    }

    .featured-image-mobile {
      display: block !important;
    }
  }
`
