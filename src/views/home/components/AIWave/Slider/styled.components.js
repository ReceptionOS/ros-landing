import styled from "styled-components"

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: grid;
  }

  .slick-slider {
    padding-right: 0 !important;
    height: 280px;
  }

  .slick-slider .slick-slide div {
    padding: 0;
  }

  .border-container-rows-vertical-sides {
    border-left: none;

    .left-middle {
      display: none;
    }
  }

  @media only screen and (max-width: 700px) {
    .slick-slider {
      height: 240px;
    }
  }
`
