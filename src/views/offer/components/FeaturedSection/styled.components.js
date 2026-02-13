import styled from "styled-components"

export const FeaturedSectionComponent = styled.div`
  .featured-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0 20px;
    text-align: center;

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

  @media only screen and (max-width: 578px) {
    .image {
      display: none !important;
    }

    .featured-image-mobile {
      display: block !important;
    }
  }
`
