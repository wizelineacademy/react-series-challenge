import styled from 'styled-components';

const CenterContenteDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${props => props.padding ? props.padding : ''};

  width: ${props => props.coverAll ? '100%' : ''};
  height: ${props => props.coverAll ? '100%' : ''};

  flex-direction: ${props => props.direction ? props.direction : ''};
`;

export default CenterContenteDiv;
