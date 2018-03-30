import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
`
export const SearchButton = ButtonStyled.extend`
  padding: 6px;
  border-radius: 3px;
  background-color: #31dc8c;
  color: #fff;
`
export const FavoriteButton = ButtonStyled.extend`
  border-radius: 5px;
  background-color: #ffc107;
  color: #fff;
  padding: 5px;
  font-size: 22px;
  font-weight: bold;
`

export default { ButtonStyled, SearchButton };