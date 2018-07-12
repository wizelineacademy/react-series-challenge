import styled from "styled-components";
export const StyledFavButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: 2px solid;
  border-color: ${props => props.add ? 'green' : 'red'}
  border-radius: 100px;
  width: 150px;
  background-size: 100%;
`;