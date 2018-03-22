import styled from 'styled-components';
const maxCols= 12;
const minWidth = 100 / maxCols;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex-basis: ${props => (props.span ? props.span / maxCols * 100 : minWidth)}%;
`;
