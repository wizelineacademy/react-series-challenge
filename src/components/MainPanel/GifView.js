import React from 'react';
import Star from './Star';

import StyledGifView, { Gif } from '../styled/GifView.styled.js';

const GifView = ({ src, id, favorite, gif }) => (
  <StyledGifView>
    <Gif src={src} />
    <Star active={favorite} id={id} gif={gif} />
  </StyledGifView>
)

export default GifView;