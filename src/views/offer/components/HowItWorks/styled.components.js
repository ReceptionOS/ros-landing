import styled from "styled-components"

export const HowItWorksComponent = styled.div`
  .how-it-works-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    padding: 0 20px;
    max-width: 654px;
    margin: 0 auto;

    .how-it-works-title {
      font-size: 48px;
      font-weight: 400;
      line-height: 56px; /* 116.667% */
      letter-spacing: -0.72px;
      padding-bottom: 2px;
    }

    .how-it-works-description {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px; /* 150% */
      color: rgba(255, 232, 217, 0.64);
      white-space: pre-line;
    }
  }

  @media only screen and (max-width: 890px) {
    .how-it-works-wrapper {
      .how-it-works-title {
        font-size: 32px;
        line-height: 32px; /* 100% */
        letter-spacing: -0.72px;
      }
    }
  }
`
