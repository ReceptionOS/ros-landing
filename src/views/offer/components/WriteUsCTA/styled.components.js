import styled from "styled-components"

export const WriteUsComponent = styled.div`
  overflow: hidden;
  width: 100%;

  .text-container {
    padding: 0 20px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;

    h2 {
      font-size: 48px;
      font-weight: 400;
      line-height: 56px; /* 116.667% */
      letter-spacing: -0.72px;
      white-space: pre-line;
    }

    .link {
      color: rgba(255, 232, 217, 0.64);
      text-decoration: none;
    }

    .link:hover {
      text-decoration: underline;
    }
    .button {
      margin-top: 16px;
    }
  }
  .image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .image-mobile {
    display: none;
  }

  @media only screen and (max-width: 578px) {
    .text-container {
      h2 {
        font-size: 32px;
        line-height: 32px; /* 100% */
        letter-spacing: -0.72px;
      }

      .p-new-model-18 {
        margin-top: 16px;
      }
    }

    .image {
      display: none;
    }

    .image-mobile {
      display: block;
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`
