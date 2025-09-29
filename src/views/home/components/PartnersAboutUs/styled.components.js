import styled from "styled-components"

export const PartnersAboutUsComponent = styled.div`
  .pau-container {
    width: 50%;
    height: 460px;
    box-sizing: border-box;
    margin: auto;
    padding-top: 40px;
    text-align: center;
    position: relative;

    .top-title {
      display: flex;
      max-width: 378px;
      margin: 0 auto 40px auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
  }

  @media only screen and (max-width: 1130px) {
    .pau-container {
      width: 80%;
      height: 440px;
    }
  }
`
