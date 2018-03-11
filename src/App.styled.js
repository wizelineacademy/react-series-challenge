import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    background-color: antiquewhite;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const AppWrapperStyled = styled.div``;

export { AppWrapperStyled };
