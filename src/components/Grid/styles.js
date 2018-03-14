import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex-basis: ${props => (props.span ? props.span / 12 * 100 : 8.33)}%;
`;
