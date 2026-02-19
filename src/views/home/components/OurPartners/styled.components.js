import styled from "styled-components"

export const OurPartnersContainer = styled.div`
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;

  .image {
    width: 126px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .elevenlabs-grant {
    width: 90px;
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
