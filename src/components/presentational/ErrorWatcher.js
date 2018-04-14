import styled from 'styled-components';

const ErrorWatcherStyled = styled.section`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 60px;
  text-align: center;
  vertical-align: middle;
  color: white;
  font-weight: bold;
  background-color: #cc0000;
  font-size: 1.25em;
  display: ${props => (props.visible) ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;

export default ErrorWatcherStyled;