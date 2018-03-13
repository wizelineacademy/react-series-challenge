import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const GiphyContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default GiphyContainer;