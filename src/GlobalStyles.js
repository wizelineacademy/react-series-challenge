import { injectGlobal } from 'styled-components';

const injectGlobalStyles = () => injectGlobal`
  body {
    margin: 0;
  }
`;

export default(injectGlobalStyles);
