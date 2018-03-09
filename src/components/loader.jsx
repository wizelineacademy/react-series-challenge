import React from 'react';
import styled, { keyframes } from 'styled-components';

const stretchDelay = keyframes`
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1.0); }
`;

const Loader = styled.div`
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
`;

const LoaderRectangle = styled.div.attrs({
  'animation-delay': props => props.delay || 0,
})`
  margin: 0px 1px;
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: ${stretchDelay} 1.2s infinite ease-in-out;
  animation-delay: ${props => props['animation-delay']};
`;

export default () => (
  <Loader>
    <LoaderRectangle />
    <LoaderRectangle delay="-1.1s" />
    <LoaderRectangle delay="-1.0s" />
    <LoaderRectangle delay="-0.9s" />
    <LoaderRectangle delay="-0.8s" />
  </Loader>
);
