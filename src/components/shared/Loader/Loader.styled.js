import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyled = styled.div`
  position: absolute;
  top: 0;
  right: 18px;
  width: 25px;
  height: 25px;
  border: 3px solid white;
  border-left-color: deepskyblue;
  border-radius: 50%;
  animation: 1s linear ${animation} infinite;
`;

export { LoaderStyled };
