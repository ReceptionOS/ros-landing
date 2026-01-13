import styled from "styled-components"

export const VimeoContainer = styled.div`
  position: relative;
  width: 400px;
  height: 225px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    width: 320px;
    height: 180px;
  }

  @media only screen and (max-width: 480px) {
    width: 280px;
    height: 158px;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`
