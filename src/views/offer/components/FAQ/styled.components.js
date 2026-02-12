import styled from "styled-components"

export const FAQComponent = styled.div`
  position: relative;

  .faq-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 160px;
    z-index: 1;
  }

  .top-lines {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
    width: 799px;
    pointer-events: none;
    z-index: 0;
  }

  .bottom-lines {
    position: absolute;
    bottom: 280px;
    left: 50%;
    transform: translateX(-50%);
    width: 799px;
    pointer-events: none;
    z-index: 0;
  }

  .faq-title {
    text-align: center;

    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px; /* 116.667% */
    letter-spacing: -0.72px;
    background: linear-gradient(
      180deg,
      #fff8f3 0%,
      rgba(255, 232, 217, 0.7) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .faq-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    margin-bottom: 84px;
  }

  .faq-items {
  }

  .faq-placeholder {
  }

  @media only screen and (max-width: 578px) {
    .faq-title {
    }
  }
`

export const AccordionItem = styled.div`
  .border-container-4-rows {
    transition: background 0.3s ease-in-out;
  }

  .border-container-4-rows:not(.faq-item-active) {
    background: transparent;

    .left-top,
    .left-bottom,
    .right-top,
    .right-bottom {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }

  .border-container-4-rows.faq-item-active {
    background: rgba(34, 24, 21, 0.25);

    .left-top,
    .left-bottom,
    .right-top,
    .right-bottom {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`

export const AccordionButton = styled.button`
  cursor: pointer;
  padding: 32px;
  padding-bottom: ${props => (props.isOpen ? "12px" : "32px")};
  transition: padding 0.3s ease-in-out;
  width: 100%;
  background-color: transparent;
  border: unset;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  background: linear-gradient(
    180deg,
    #fff8f3 0%,
    rgba(255, 232, 217, 0.7) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AccordionIcon = styled.span`
  display: inline-flex;
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.isOpen ? "rotate(45deg)" : "rotate(0deg)")};
`

export const AccordionContent = styled.div`
  display: grid;
  grid-template-rows: ${props => (props.isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease-in-out;

  > div {
    overflow: hidden;
  }

  p {
    color: rgba(255, 232, 217, 0.64);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    padding-top: 0px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
    margin: 0;
  }
`
