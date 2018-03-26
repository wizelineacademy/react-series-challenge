import React from 'react';
import {MasonryItem, Overlay, ImageWrapper, LinkStyled, GifImg, GifTitle} from "./Gif.styled";

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

export const Gif = ({ gif, fullWidth, addGif, removeGif, isFavorited, isInDetail }) => (
  <MasonryItem fullWidth={fullWidth}>
      <ImageWrapper>
        <GifImg isFavorited={isFavorited} src={getPreviewGifUrl(gif)} alt={gif.title} />
        <Overlay>
          <GifTitle>Title: {gif.title}</GifTitle>
          <button onClick={() => handleFavButton(gif, addGif, removeGif, isFavorited)}>
            {!isFavorited ? 'Add to Favorites': 'Remove from favorites'}
          </button>
          { !isInDetail ? (
            <LinkStyled to={{pathname: `/detail/${gif.id}`}}>
              View detail
            </LinkStyled>) : ''
          }
        </Overlay>
      </ImageWrapper>
  </MasonryItem>
)