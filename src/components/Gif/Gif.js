import React from 'react';
import { Link } from 'react-router-dom';
import {MasonryItem} from "./Gif.styled";

const getPreviewGifUrl = (gif) => {
  if (gif.images && gif.images.original) {
    return gif.images.original.url;
  } else {
    return '';
  }
};

export const Gif = ({ gif, fullWidth }) => (
  <MasonryItem fullWidth={fullWidth}>
    <Link to={{
      pathname: `/detail/${gif.id}`,
    }}>
      <img src={getPreviewGifUrl(gif)} alt={gif.title} />
    </Link>
  </MasonryItem>
)