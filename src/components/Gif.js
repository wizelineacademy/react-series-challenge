import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/favorites';
import { isFavorited } from '../selectors/favorites';

const FAVORITE_ICON = '⭐';

const StyledGif = styled.img`
  width: 200px;
  height: auto;
  display: block;
`;

const StyledGifContainer = styled.div`
  position: relative;
`;

const StyledFavoritedIcon = styled.div`
  cursor: pointer;
  transition: filter .15s ease;
  content: '${FAVORITE_ICON}';
  position: absolute;
  bottom: 10px;
  right: 10px;
  ${({ active }) => active ? '' : `filter: grayscale(100%);`}
`;

const Gif = ({ gif, imageSrc, favorited, toggleFavorite }) => (
  <StyledGifContainer>
    <StyledFavoritedIcon onClick={() => toggleFavorite(gif)} active={favorited}>
      {FAVORITE_ICON}
    </StyledFavoritedIcon>
    <StyledGif src={imageSrc} />
  </StyledGifContainer>
);

const mapStateToProps = (state, { gif }) => ({
  favorited: isFavorited(gif.id, state)
});

const mapDispatchToProps = {
  toggleFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
