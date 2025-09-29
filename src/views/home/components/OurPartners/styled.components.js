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

    a:hover {
      /* transition: all 0.3s ease-in !important; */
      /* background-color: rgba(255, 255, 255, 0.02); */
    }
  }
  .we-work-with-a-wrapper a {
    /* margin-right: auto !important; */
    /* margin-left: auto !important; */
  }

  @media only screen and (max-width: 1130px) {
    padding-top: 30px;
  }
`
