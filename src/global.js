import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url('./fonts/Montserrat-Regular.ttf');
  }

  body {
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;
