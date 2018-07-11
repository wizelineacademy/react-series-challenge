import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

export const Wrap = styled.div`
  margin-top: 90px;
`;

export default injectGlobal`
html, body {
  height: 100%;
}
body {
  margin: 0;
  background-color: lightsteelblue;
  background-position: center;
  background-size: cover;
}`;
