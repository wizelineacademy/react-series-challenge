import styled from 'styled-components'

const FavButton = styled.button`
  font-family: 'Font Awesome 5 Free';
  font-size: 20px;
  padding: 5px;
  border: none;
  background-color: transparent;
  outline: none;
  color: #999;
  transform: scale(.88, 1);


  &.fav {
    color: #de5971;
    font-weight: bold;
  }

  :before {
    content: '\f004';
  }
`

export default FavButton;
