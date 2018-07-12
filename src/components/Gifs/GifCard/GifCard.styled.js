import styled from 'styled-components'
import { Favorite } from 'styled-icons/material'

const GifCardWrapper = styled.article`
  width: 248px;
  position: relative;
`

const GifCardItem = styled.a`
  height: 100%;
  width: 100%;
`

const GifImage = styled.img`
  width: 100%;
`

const GifCardFavorites = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const FavoriteLogo = styled(Favorite)`
  color: ${props => (props.isFavorite ? "red" : "white")};
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }
`;

export {
  GifCardWrapper,
  GifCardItem,
  GifImage,
  GifCardFavorites,
  FavoriteLogo
}