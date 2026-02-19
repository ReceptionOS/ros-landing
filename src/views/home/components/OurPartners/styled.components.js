import styled from "styled-components"

export const OurPartnersContainer = styled.div`
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ box }) =>
    box &&
    `
    padding-top: 0;
    width: 734px;
    margin: 0 auto;

    .container {
      width: 100%;
      box-sizing: border-box;
    }

    .container-desktop {
      gap: 20px;
      justify-content: center;
      max-width: 100%;
      width: 100%;
    }

    .we-work-with-a-wrapper {
      padding: 6px 12px !important;
      flex-shrink: 1;
      min-width: 0;
    }

    .image {
      width: auto;
      flex-shrink: 1;
      max-width: 100px;
    }
  `}

  .image {
    width: 126px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .container-desktop {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .we-work-with-a-wrapper {
    display: flex !important;
    justify-items: center;
    align-items: center;
    height: 44px;
    padding: 6px 22px !important;

    a img {
      margin: auto;
      width: 100% !important;
      height: 32px;
    }

    img {
      max-height: 32px;
      width: 100%;
      object-fit: contain !important;
    }
  }

  @media only screen and (max-width: 1130px) {
    padding-top: 30px;
  }
`
