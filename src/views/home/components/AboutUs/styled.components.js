import styled from "styled-components"

export const AboutUsComponent = styled.div`
  padding: 30px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
  }

  .about-us-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    max-width: 800px;
    text-align: center;

    p {
      max-width: 638px;
    }

    span {
      color: #f8efea;
    }
  }

  @media only screen and (max-width: 1130px) {
    .container {
      margin: 0 !important;
      gap: 20px;
    }
    .about-us-top {
      max-width: 300px;

      p {
        max-width: 289px;
      }
    }
  }
`
