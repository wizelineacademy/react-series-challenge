import React from 'react';
import {MasonryItem} from "./Gif.styled";

const getPreviewGifUrl = (gif) => {
  if (gif.images && gif.images.original) {
    return gif.images.original.url;
  } else {
    return '';
  }
};

export const Gif = ({ gif }) => (
  <MasonryItem>
    <img src={getPreviewGifUrl(gif)} alt={gif.title} />
  </MasonryItem>
)