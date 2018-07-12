import styled from 'styled-components';

export const AppStyled = styled.div`
  text-align: center;
  background-color: ${props => props.theme.bg}
  color: ${props => props.theme.textColor}
`;