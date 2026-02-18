import styled from "styled-components"

export const PricingWrapper = styled.div`
  color: white;
`

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const PricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 72px;

  h1 {
    font-family: "Inter Tight", sans-serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.72px;
    text-align: center;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
  }
`

export const PricingInner = styled.div`
  max-width: 638px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PricingTop = styled.div`
  position: relative;
  width: 100%;
  max-width: 638px;

  .vector-115 {
    width: 100%;
    height: 30px;
  }

  .vector-4 {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 108px;
    z-index: 0;
  }

  .top-border {
    position: relative;
    border-bottom: 1px solid #302c29;
    border-left: 1px solid #302c29;
    border-right: 1px solid #302c29;
    margin-top: -1px;
    padding-bottom: 32px;

    .corner-arrow {
      position: absolute;
      z-index: 3;
    }
    .corner-left-top {
      top: -1px;
      left: -1px;
    }
    .corner-right-top {
      top: -1px;
      right: -1px;
    }
    .corner-left-bottom {
      bottom: -1px;
      left: -1px;
    }
    .corner-right-bottom {
      bottom: -1px;
      right: -1px;
    }
  }

  .top-divider {
    border-bottom: 1px solid #302c29;
    border-left: 1px solid #302c29;
    border-right: 1px solid #302c29;
    height: 32px;
    border-radius: 0 0 4px 4px;
  }

  .features-description {
    font-family: "Inter Tight", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(255, 232, 217, 0.64);
    opacity: 0.7;
    max-width: 461px;
    padding: 12px 32px 0;
  }

  @media only screen and (max-width: 578px) {
    .vector-115 {
      display: none;
    }

    .vector-4 {
      top: 0;
      height: 123px;
    }

    .top-border {
      overflow: clip;
      padding-bottom: 24px;

      .corner-arrow {
        display: none;
      }
    }

    .top-divider {
      display: none;
    }

    .features-description {
      max-width: none;
      opacity: 1;
      color: rgba(255, 232, 217, 0.8);
      padding: 12px 24px 0;
    }
  }
`

export const PTopPricing = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 29px 32px 0;
  min-height: 108px;

  .price-flag {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 102px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid #302c29;
    background: #0a0a0a;
    flex-shrink: 0;
  }

  .price-flag-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    height: 32px;
    border-radius: 500px;
    background:
      linear-gradient(
        90deg,
        rgba(255, 173, 156, 0.07) 0%,
        rgba(255, 156, 156, 0.07) 50.01%,
        rgba(255, 169, 156, 0.07) 100%
      ),
      linear-gradient(
        180deg,
        rgba(13, 7, 2, 0) 0%,
        rgba(115, 59, 21, 0.3) 100%
      ),
      #0f0c0a;
    box-shadow: inset 0 0.5px 1px -1px rgba(255, 255, 255, 0.25);

    p {
      font-family: "Inter Tight", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      background:
        linear-gradient(
          180deg,
          rgba(255, 248, 243, 0.7) 0%,
          rgba(255, 232, 217, 0.49) 100%
        ),
        linear-gradient(
          90deg,
          rgba(255, 236, 210, 0.8) 0%,
          rgba(255, 131, 74, 0.8) 100%
        );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    }
  }

  .price-amount {
    display: flex;
    align-items: baseline;
    gap: 7px;
  }

  .price-value {
    font-family: "Inter Tight", sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }

  .price-suffix {
    font-family: "Inter Tight", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(255, 232, 217, 0.64);
    white-space: nowrap;
    padding-bottom: 2px;
  }

  @media only screen and (max-width: 578px) {
    padding: 26px 24px 0;

    .price-amount {
      flex-direction: column;
      align-items: flex-end;
      gap: 0;
    }

    .price-suffix {
      font-size: 14px;
      color: rgba(255, 232, 217, 0.8);
    }
  }
`

export const PTopFeatures = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 20px;
  padding: 32px 32px 0;

  .features-left,
  .features-right {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .features-left {
    width: 272px;
  }

  .features-right {
    width: 282px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      flex-shrink: 0;
    }
  }

  .feature-label {
    font-family: "Inter Tight", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #ffe8d9;
  }

  .feature-header {
    font-family: "Inter Tight", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bullet-dot {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 22px;

    &::after {
      content: "";
      width: 2px;
      height: 2px;
      border-radius: 999px;
      background: #e76220;
      opacity: 0.5;
    }
  }

  @media only screen and (max-width: 578px) {
    flex-direction: column;
    gap: 16px;
    padding: 24px 24px 0;

    .features-left,
    .features-right {
      width: 100%;
    }

    .feature-header {
      color: #ffe8d9;
      background: none;
      -webkit-text-fill-color: #ffe8d9;
    }
  }
`

export const PricingMiddle = styled.div`
  position: relative;
  width: 100%;
  max-width: 638px;

  .side-vector-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 100%;
    pointer-events: none;
    rotate: 180deg;
  }

  .side-vector-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 100%;
    pointer-events: none;
  }

  @media only screen and (max-width: 578px) {
    .side-vector-left,
    .side-vector-right {
      display: none;
    }
  }
`

export const PMiddleCalc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;

  h2 {
    font-family: "Inter Tight", sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.36px;
    text-align: center;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 26px;
  }

  .tab-switcher {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px;
    border-radius: 999px;
    border: 1px solid #302c29;
    background: #100d0d;
  }

  .tab-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 108px;
    height: 41px;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    font-family: "Inter Tight", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding: 0 16px;
    transition: all 0.2s ease;
  }

  .tab-btn-active {
    color: #ffe8d9;
    background:
      linear-gradient(
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
    box-shadow:
      inset 0 0.5px 1px -1px rgba(255, 255, 255, 0.25),
      inset 0 0 3px -1px rgba(255, 255, 255, 0.54);
  }

  .tab-btn-inactive {
    color: rgba(163, 148, 139, 0.85);
    background: transparent;
  }

  .tab-prefix {
    opacity: 0.8;
  }

  .calc-divider {
    width: 100%;
    height: 1px;
    background: #302c29;
    margin-top: 24px;
  }

  .calc-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 48px 0 0;
    width: 100%;
    max-width: 400px;
  }

  .calc-item {
    font-family: "Inter Tight", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(255, 232, 217, 0.64);
    text-align: center;
    white-space: nowrap;

    .calc-item-value {
      color: #ffe8d9;
    }
  }

  .calc-item-divider {
    width: 26px;
    height: 1px;
    background: #877b72;
    opacity: 0.5;
  }

  @media only screen and (max-width: 578px) {
    padding: 0;

    .calc-heading {
      border-bottom: 1px solid #302c29;
      border-left: 1px solid #302c29;
      border-right: 1px solid #302c29;
      padding: 32px 24px 48px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      font-size: 28px;
    }

    .calc-divider {
      display: none;
    }

    .calc-content {
      border-bottom: 1px solid #302c29;
      border-left: 1px solid #302c29;
      border-right: 1px solid #302c29;
      padding: 56px 24px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
    }

    .calc-list {
      padding: 0;
    }

    .calc-item {
      white-space: normal;
      color: rgba(255, 232, 217, 0.8);
    }
  }
`

export const PMiddleNumbers = styled.div`
  position: relative;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;

  .numbers-top-line {
    position: relative;
    width: 100%;
    height: 1px;
    background: #302c29;
  }

  .numbers-accent {
    position: absolute;
    top: 0;
    height: 1px;
    width: 73px;
    background: #877b72;
  }

  .numbers-accent-1 {
    left: 43px;
  }

  .numbers-accent-2 {
    left: 50%;
    transform: translateX(-50%);
  }

  .numbers-accent-3 {
    right: 43px;
  }

  .numbers-container {
    position: relative;
    border: 1px solid #302c29;
    border-top: none;
    padding: 24px 38px;

    .corner-arrow {
      position: absolute;
      z-index: 3;
    }
    .corner-left-top {
      top: -1px;
      left: -1px;
    }
    .corner-right-top {
      top: -1px;
      right: -1px;
    }
    .corner-left-bottom {
      bottom: -1px;
      left: -1px;
    }
    .corner-right-bottom {
      bottom: -1px;
      right: -1px;
    }
  }

  .numbers-grid {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  .number-item {
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .number-value {
    font-family: "Inter Tight", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .number-value-suffix {
    font-size: 14px;
    font-weight: 400;
  }

  .number-label {
    font-family: "Inter Tight", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(255, 232, 217, 0.64);
  }

  @media only screen and (max-width: 578px) {
    padding: 0;

    .numbers-top-line {
      display: none;
    }

    .numbers-container {
      border: none;
      padding: 0;

      .corner-arrow {
        display: none;
      }
    }

    .numbers-grid {
      flex-direction: column;
      gap: 0;
    }

    .number-item {
      width: 100%;
      border-bottom: 1px solid #302c29;
      border-left: 1px solid #302c29;
      border-right: 1px solid #302c29;
      padding: 24px;
      box-sizing: border-box;
      text-align: center;
      min-height: 104px;
      justify-content: center;
    }

    .number-value {
      color: #ffe8d9;
      background: none;
      -webkit-text-fill-color: #ffe8d9;
    }

    .number-value-suffix {
      color: #ffe8d9;
      -webkit-text-fill-color: #ffe8d9;
    }

    .number-label {
      color: rgba(255, 232, 217, 0.8);
    }
  }
`

export const PricingBottom = styled.div`
  position: relative;
  width: 100%;
  max-width: 638px;
  min-height: 372px;

  .bottom-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .bottom-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 72px 103px 0;
    text-align: center;
  }

  h3 {
    font-family: "Inter Tight", sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.36px;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }

  p {
    font-family: "Inter Tight", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(255, 232, 217, 0.64);
    max-width: 431px;
    margin: 0;
  }

  .bottom-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 20px;
    border-radius: 500px;
    border: none;
    text-decoration: none;
    font-family: "Inter Tight", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #ffe8d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background:
      linear-gradient(
        160deg,
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
    box-shadow:
      inset 0 0.5px 1px -1px rgba(255, 255, 255, 0.25),
      inset 0 0 3px -1px rgba(255, 255, 255, 0.54);
    transition: all 0.15s ease-out;

    &:hover {
      background-color: rgba(230, 105, 40, 0.1);
    }
  }

  .bottom-side-lines-mobile {
    display: none;
  }

  @media only screen and (max-width: 578px) {
    min-height: auto;

    .bottom-shapes {
      display: none;
    }

    .bottom-side-lines-mobile {
      display: block;
      position: absolute;
      top: 0;
      width: 14.5px;
      height: 100%;
      pointer-events: none;

      &.left {
        left: 6px;
      }
      &.right {
        right: 6px;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background: linear-gradient(
          180deg,
          #302c29 0%,
          rgba(48, 44, 41, 0) 100%
        );
      }
    }

    .bottom-content {
      padding: 48px 44px 0;
      gap: 24px;
      max-width: 303px;
      margin: 0 auto;
    }

    h3 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
      color: rgba(255, 232, 217, 0.8);
      max-width: none;
    }
  }
`
