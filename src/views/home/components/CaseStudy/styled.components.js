import styled from "styled-components"

export const CaseStudyComponent = styled.div`
  padding: 30px 0;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;
  }

  .case-study-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    max-width: 960px;
    text-align: center;

    p {
      max-width: 614px;
    }
  }
  .apolonia-cs {
    width: 118px;
    img {
      width: 118px;
    }
  }

  .background-cs {
    position: absolute;
    top: -80px;
    left: 60px;
    z-index: -1;
  }

  .image-cs-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 966px;
    /* box-sizing: border-box; */
    padding: 24px;

    .apolonia-image {
      max-width: 966px;
      img {
        max-width: 966px;
      }
    }
  }

  @media only screen and (max-width: 1130px) {
    padding: 0 0 30px 0;
    .case-study-top {
      max-width: 284px;
      p {
        max-width: 279px;
      }
    }

    .background-cs {
      top: 180px;
      left: 15%;
      width: 555px;
    }

    .image-cs-container {
      max-width: 350px;
      padding: 12px;

      .apolonia-image {
        max-width: 350px;
        img {
          max-width: 350px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .background-cs {
      top: 160px;
      left: -70px;
      width: 555px;
    }
  }
`

export const CsModalContainer = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 55px);

  .cs-modal {
    border-bottom: none;
  }

  .cs-modal-first {
    position: relative;
    .right-top,
    .left-top {
      display: none;
    }
  }

  .close-button {
    position: absolute;
    top: -24px;
    right: -24px;
  }

  .cs-modal-1 {
    padding: 24px 24px 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;

    .apolonia-cs {
      width: 114px;
      margin-top: 16px;
      img {
        width: 114px;
      }
    }

    p {
      max-width: 520px;
    }

    span {
      color: #f8efea;
    }
  }

  .cs-modal-2 {
    display: flex;
    align-items: flex-start;

    .tile-2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      gap: 16px;
      flex: 1 0 0;
      padding: 24px 24px 32px 24px;

      svg {
        display: flex;
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        padding: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 500px;
        border: 1px solid #302c29;
      }

      .text-con {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;
      }
    }
  }

  .cs-modal-3 {
    padding: 24px 24px 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cs-modal-last {
    padding: 44px 0;
    height: 100%;
    box-sizing: border-box;
    .right-bottom,
    .left-bottom {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    .close-button {
      right: 0;
    }
    .cs-modal-2 {
      flex-direction: column;
    }
  }
`
