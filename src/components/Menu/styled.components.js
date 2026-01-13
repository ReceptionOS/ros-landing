import styled from "styled-components"

export const MenuComponent = styled.div`
  display: flex;
  height: 75px;
  padding: 16px 140px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(3, 0, 20, 0.06);
  backdrop-filter: blur(8px);

  .navigation-component {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    .ros-image {
      width: 138px !important;
      img {
        width: 138px !important;
        flex-shrink: 0;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;

      .order-button {
        height: 36px;
        padding: 0 16px;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }

  @media only screen and (max-width: 1130px) {
    padding: 16px;
  }
`
