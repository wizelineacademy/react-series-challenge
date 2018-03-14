import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Gif from './Gif';
import { toggleFavorite } from '../actions/favorites';
import { isFavorited } from '../selectors/favorites';
import { selectedGifChange } from '../actions/selected';

const GifList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledGifContainer = styled.div`
  width: 200px;
  position: relative;
`;

const GifGallery = ({ gifs }) => (
  <GifList>
    {gifs.map(gif =>
      <StyledGifContainer key={gif.id}>
        <Gif gif={gif} />
      </StyledGifContainer>
    )}
  </GifList>
);

export default GifGallery;
