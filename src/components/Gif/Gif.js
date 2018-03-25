import React from 'react';
import {MasonryItem, Overlay, ImageWrapper, LinkStyled} from "./Gif.styled";

const getPreviewGifUrl = (gif) => {
  if (gif.images && gif.images.original) {
    return gif.images.original.url;
  } else {
    return '';
  }
};

const handleFavButton = (gif, addGif, removeGif, isFavorited) => {
  if (!isFavorited) {
    addGif(gif);
  } else {
    removeGif(gif.id);
  }
};

export const Gif = ({ gif, fullWidth, addGif, removeGif, isFavorited }) => (
  <MasonryItem fullWidth={fullWidth}>
      <ImageWrapper>
        <img src={getPreviewGifUrl(gif)} alt={gif.title} />
        <Overlay>
          <button onClick={() => handleFavButton(gif, addGif, removeGif, isFavorited)}>
            {!isFavorited ? 'Add to Favorites': 'Remove from favorites'}
          </button>
          <LinkStyled to={{pathname: `/detail/${gif.id}`}}>
            View detail
          </LinkStyled>
        </Overlay>
      </ImageWrapper>
  </MasonryItem>
)