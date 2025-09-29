import styled from "styled-components"

export const BaseModalContainer = styled.div`
  /* display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px; */
`

export const BaseModalHeader = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }

  svg {
    display: flex;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    padding: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--Border, rgba(253, 240, 231, 0.2));
    background: linear-gradient(
      99deg,
      rgba(5, 4, 3, 0.05) 9.46%,
      rgba(5, 4, 3, 0.3) 90.62%
    );
    box-shadow: -2px -2px 8px 0 rgba(255, 255, 255, 0.4) inset;
    backdrop-filter: blur(5px);
  }
`
