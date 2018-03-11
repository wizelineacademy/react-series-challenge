import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

export default styled.button`
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 0 20px;
  border-width: 0px;
  background: linear-gradient(45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;

  :focus { outline: none; }
`;
