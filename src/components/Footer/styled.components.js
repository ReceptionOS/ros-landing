import styled from "styled-components"
export const FooterComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  .footer-background {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-1 {
    padding: 4px 0 32px 0;

    .ros-image {
      img {
        width: 114px;
      }
    }
  }

  a {
    text-decoration: none;
    transition: all 0.15s ease-out;
    color: #a3948b;

    &:hover {
      color: #ffe8d9;
    }
  }

  .footer-2 {
    padding: 32px 0;
    border-top: none;

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 314px;
    }

    .dropdown-toggle {
      display: flex;
      flex-direction: row;
      gap: 4px;
      background-color: var(--Black) !important;
      border: none;
      padding: 0;
      cursor: pointer;
      color: rgba(255, 232, 217, 0.64);
      font-family: "Inter Tight";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;

      svg {
        margin: auto;
      }
    }

    .dropdown-menu {
      opacity: 0;
      display: flex;
      flex-direction: column;
    }
    .dropdown-menu.show {
      opacity: 1;
      visibility: visible;
    }
  }

  .footer-3 {
    padding: 19px 0;
    border-top: none;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 314px;
    }

    a {
      color: #ffe8d9;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-decoration: none !important;
    }
  }

  .footer-4 {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px 0;
    gap: 20px;

    .icons {
      display: inline-flex;
      align-items: center;
      gap: 17px;

      svg {
        &:hover {
          path {
            transition: all 0.15s ease-out;
            fill: #a3948b;
          }
        }
      }
    }
  }
`
