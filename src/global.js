import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url('./fonts/Montserrat-Regular.ttf');
  }

  * {
    font-family: 'Montserrat-Regular';
    font-size: 16px;
  }

  body {
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;
