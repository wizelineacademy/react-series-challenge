import React from 'react';
import {MasonryItem, Overlay, ImageWrapper, LinkStyled} from "./Gif.styled";

const getPreviewGifUrl = (gif) => {
  if (gif.images && gif.images.original) {
    return gif.images.original.url;
  } else {
    return '';
  }
};

export const Gif = ({ gif, fullWidth, addGif }) => (
  <MasonryItem fullWidth={fullWidth}>
      <ImageWrapper>
        <img src={getPreviewGifUrl(gif)} alt={gif.title} />
        <Overlay>
          <button onClick={() => addGif(gif)}>
            Add to Favorites
          </button>
          <LinkStyled to={{pathname: `/detail/${gif.id}`}}>
            View detail
          </LinkStyled>
        </Overlay>
      </ImageWrapper>
  </MasonryItem>
)