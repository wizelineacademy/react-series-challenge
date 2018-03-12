import React from 'react';
import {
  PreviewCard,
  Image,
  Data
} from './Preview.styled';


const GiphyPreview = ({ preview_gif, onSelect, title, id }) => {
  const {
    url
  } = preview_gif;
  return (
    <PreviewCard onClick={() => onSelect(id)}>
    <Image src={url} />
      <Data>
      <span>{title}</span>
      </Data>
    </PreviewCard>
  );
};

export default GiphyPreview;