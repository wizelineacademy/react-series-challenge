import { injectGlobal } from 'styled-components';

const injectGlobalStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Pacifico|Rammetto+One');

  *{
    font-family: 'Rammetto One', cursive;
  }

  body {
    margin: 0;
    font-size: 16px;
    background: #6a60a9;
  }
`;

export default(injectGlobalStyles);
