import styled, { css } from "styled-components"

export const RoundedButtonSvg = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;
  border: none;
  background: linear-gradient(
      129deg,
      rgba(231, 98, 32, 0) 35.85%,
      rgba(231, 98, 32, 0.2) 72.26%
    ),
    linear-gradient(
      0deg,
      rgba(230, 105, 40, 0.1) 0%,
      rgba(230, 105, 40, 0.1) 100%
    ),
    linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
  background-blend-mode: color-dodge, normal, normal;
  box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
    0 0 3px -1px rgba(255, 255, 255, 0.54) inset;

  transition: all 0.15s ease-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(230, 105, 40, 0.1);
    /* background: linear-gradient(
        129deg,
        rgba(231, 98, 32, 0) 35.85%,
        rgba(231, 98, 32, 0.33) 72.26%
      ),
      linear-gradient(
        0deg,
        rgba(230, 105, 40, 0.2) 0%,
        rgba(230, 105, 40, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
    background-blend-mode: color-dodge, normal, normal;
    box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
      0 0 3px -1px rgba(255, 255, 255, 0.54) inset; */
  }

  @media only screen and (max-width: 1130px) {
    &:hover {
      background: linear-gradient(
          129deg,
          rgba(231, 98, 32, 0) 35.85%,
          rgba(231, 98, 32, 0.2) 72.26%
        ),
        linear-gradient(
          0deg,
          rgba(230, 105, 40, 0.1) 0%,
          rgba(230, 105, 40, 0.1) 100%
        ),
        linear-gradient(
          180deg,
          rgba(13, 7, 2, 0) 0%,
          rgba(115, 59, 21, 0.2) 100%
        );
      background-blend-mode: color-dodge, normal, normal;
      box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
        0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
    }
  }
`

export const RoundedButtonSvgDark = styled(RoundedButtonSvg)`
  border: 1px solid #302c29;
  background: linear-gradient(
      90deg,
      rgba(255, 173, 156, 0.07) 0.01%,
      rgba(255, 156, 156, 0.07) 50.01%,
      rgba(255, 169, 156, 0.07) 100%
    ),
    linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.3) 100%),
    #0f0c0a;
`

export const RoundedButtonOrange = styled.button`
  display: inline-flex;
  height: 56px;
  box-sizing: border-box;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border: none;
  border-radius: 500px;
  background: linear-gradient(
      129deg,
      rgba(231, 98, 32, 0) 35.85%,
      rgba(231, 98, 32, 0.2) 72.26%
    ),
    linear-gradient(
      0deg,
      rgba(230, 105, 40, 0.1) 0%,
      rgba(230, 105, 40, 0.1) 100%
    ),
    linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
  background-blend-mode: color-dodge, normal, normal;
  box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
    0 0 3px -1px rgba(255, 255, 255, 0.54) inset;

  transition: all 0.15s ease-out;
  cursor: pointer;

  color: #ffe8d9;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  text-decoration: none;

  &:hover {
    background-color: rgba(230, 105, 40, 0.1);
    /* background: linear-gradient(
        129deg,
        rgba(231, 98, 32, 0) 35.85%,
        rgba(231, 98, 32, 0.33) 72.26%
      ),
      linear-gradient(
        0deg,
        rgba(230, 105, 40, 0.2) 0%,
        rgba(230, 105, 40, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.2) 100%);
    background-blend-mode: color-dodge, normal, normal;
    box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
      0 0 3px -1px rgba(255, 255, 255, 0.54) inset; */
  }

  @media only screen and (max-width: 1130px) {
    &:hover {
      background: linear-gradient(
          129deg,
          rgba(231, 98, 32, 0) 35.85%,
          rgba(231, 98, 32, 0.2) 72.26%
        ),
        linear-gradient(
          0deg,
          rgba(230, 105, 40, 0.1) 0%,
          rgba(230, 105, 40, 0.1) 100%
        ),
        linear-gradient(
          180deg,
          rgba(13, 7, 2, 0) 0%,
          rgba(115, 59, 21, 0.2) 100%
        );
      background-blend-mode: color-dodge, normal, normal;
      box-shadow: 0 0.5px 1px -1px rgba(255, 255, 255, 0.25) inset,
        0 0 3px -1px rgba(255, 255, 255, 0.54) inset;
    }
  }
`

export const RoundedInfoTile = styled.div`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background: linear-gradient(
      90deg,
      rgba(255, 173, 156, 0.07) 0.01%,
      rgba(255, 156, 156, 0.07) 50.01%,
      rgba(255, 169, 156, 0.07) 100%
    ),
    linear-gradient(180deg, rgba(13, 7, 2, 0) 0%, rgba(115, 59, 21, 0.3) 100%),
    #0f0c0a;

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    background: linear-gradient(
      90deg,
      rgba(255, 236, 210, 0.8) 0%,
      rgba(255, 131, 74, 0.8) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${props =>
    props.disabled &&
    css`
      background: linear-gradient(
          90deg,
          rgba(255, 173, 156, 0.07) 0.01%,
          rgba(255, 156, 156, 0.07) 50.01%,
          rgba(255, 169, 156, 0.07) 100%
        ),
        rgba(15, 12, 10, 0.2) !important;

      p {
        opacity: 0.5;
      }
    `}
`
