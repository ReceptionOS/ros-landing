import styled from "styled-components"

export const BannerWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: min(90%, 720px);
  pointer-events: none;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(15, 12, 10, 0.92);
  box-shadow: 0px 24px 48px rgba(13, 7, 2, 0.45);
  backdrop-filter: blur(12px);
  pointer-events: auto;

  p {
    margin: 0;
    color: #ffe8d9;
    line-height: 1.5;
  }
`

export const BannerActions = styled.div`
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 640px) {
    button {
      width: 100%;
    }
  }
`
