import styled from "styled-components"

export const CookieBannerContainer = styled.div`
  display: flex;
  width: 460px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px 16px 0px 0px;
  background: rgba(10, 10, 10, 0.95);
  box-shadow:
    0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
    0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  z-index: 10;

  .header-con {
    display: flex;
    padding: 24px;
    padding-bottom: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }

  .header-con .p-head {
    color: var(--Font, #ffe8d9);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  .p-description {
    color: rgba(255, 232, 217, 0.64);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    align-self: stretch;
  }

  .agrees-con {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
  }

  .agrees-con .agree-con {
    display: flex;
    padding: 8px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
  }

  .agrees-con .agree-con .check-con {
    display: flex;
    align-items: center;
    gap: 4px;
    align-self: stretch;
  }

  .agrees-con .agree-con .check-con svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  .agrees-con .agree-con .check-con svg:hover {
    transform: scale(1.1);
  }

  .agrees-con .agree-con .check-con label {
    color: var(--Font, #ffe8d9);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.28px;
    user-select: none;
  }

  .footer-con {
    display: flex;
    padding: 16px 24px 24px 24px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    width: 100%;
    box-sizing: border-box;
  }

  .cookie-button {
    height: 36px;
    padding: 0 16px;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;

    .footer-con {
      flex-direction: column;
    }
    .footer-con button {
      width: 100%;
    }
  }
`
