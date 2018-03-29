import styled from 'styled-components';

const FavoritePinStyled = styled.i.attrs({
  className: props => props.marked ? 'fas fa-heart fa-lg' : 'far fa-heart fa-lg'
})`
  right: 0;
  padding: 10px;
  position: absolute;
  text-shadow: 0 0 4px white;

  color: ${props => props.marked ? 'red' : 'black'}
`;

export default FavoritePinStyled;
