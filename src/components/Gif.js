import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../actions/favorites';
import { isFavorited } from '../selectors/favorites';
import { selectedGifChange } from '../actions/selected';

const FAVORITE_ICON = '⭐';

const StyledGif = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const StyledFavoritedIcon = styled.a`
  cursor: pointer;
  transition: filter .15s ease;
  content: '${FAVORITE_ICON}';
  position: absolute;
  bottom: 10px;
  right: 10px;
  ${({ active }) => active ? '' : `filter: grayscale(100%);`}
`;

const Gif = ({ gif, imageSrc, favorited, toggleFavorite, selectedGifChange }) => (
  <div>
    <StyledFavoritedIcon onClick={() => toggleFavorite(gif)} active={favorited}>
      {FAVORITE_ICON}
    </StyledFavoritedIcon>
    <Link to={`?gifId=${gif.id}`}>
      <StyledGif src={imageSrc} onClick={() => selectedGifChange(gif)} />
    </Link>
  </div>
);

const mapStateToProps = (state, { gif }) => ({
  favorited: isFavorited(gif.id, state)
});

const mapDispatchToProps = {
  toggleFavorite,
  selectedGifChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
