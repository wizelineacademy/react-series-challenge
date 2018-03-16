import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../actions/favorites';
import { isFavorited } from '../selectors/favorites';
import { selectedGifChange } from '../actions/selected';

const FAVORITE_ICON = '⭐';

export const StyledGif = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const StyledFavoritedIcon = styled.a`
  cursor: pointer;
  transition: filter .15s ease;
  content: '${FAVORITE_ICON}';
  position: absolute;
  bottom: 10px;
  right: 10px;
  ${({ active }) => active ? '' : `filter: grayscale(100%);`}

  &:hover: {
    text-shadow: -1px 0px 4px rgba(20, 20, 20, 1);
  }
`;

export const Gif = ({ big, gif, favorited, selectedGifChange, toggleFavorite }) => {
  const src = !big
    ? gif.images.fixed_width_downsampled.url
    : gif.images.original.url;
  return (
    <React.Fragment>
      <StyledFavoritedIcon onClick={() => toggleFavorite(gif)} active={favorited}>
        {FAVORITE_ICON}
      </StyledFavoritedIcon>
      <Link to={`?gifId=${gif.id}`}>
        <StyledGif src={src} onClick={() => selectedGifChange(gif)} />
      </Link>
    </React.Fragment>
  );
};

const mapStateToProps = (state, { gif }) => ({
  favorited: isFavorited(gif.id, state)
});

const mapDispatchToProps = {
  toggleFavorite,
  selectedGifChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
