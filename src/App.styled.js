import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    position: relative;

    a, p, &:before {
      font-size: 1.1em;
      font-family: monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    &:before {
      content: 'by @josejbreijo';
      position: absolute;
      font-size: .8em;
      transform: rotate(90deg);
      transform-origin: left;
      left: 10px;
      top: -15px;
    }
  }

  ::selection {
    background-color: antiquewhite;
  }

  * {
    box-sizing: border-box;
  }
`;

const AppWrapperStyled = styled.div``;

export { AppWrapperStyled };
