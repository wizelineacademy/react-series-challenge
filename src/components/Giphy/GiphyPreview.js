import React from 'react';
import {
  PreviewCard,
  Image,
  Data
} from './Preview.styled';
import { FavBox } from '../FavBox';

const GiphyPreview = (props) => {
  const { preview_gif, onSelect, title, id, isFav, onFavClick, allData } = props;
  const {
    url
  } = preview_gif;
  return (
    <PreviewCard  >
    <Image src={url} onClick={() => onSelect(id)} />
      <FavBox checked={ isFav } id={id } onClick={() => onFavClick(allData)} />
      <Data>
      <span>{title}</span>
      </Data>
    </PreviewCard>
  );
};

export default GiphyPreview;