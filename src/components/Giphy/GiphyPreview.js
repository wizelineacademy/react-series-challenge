import React from 'react';
import {
  PreviewCard,
  Image,
  Data
} from './Preview.styled';


const GiphyPreview = (props) => {
  const { preview_gif, onSelect, title, } = props;
  const {
    url
  } = preview_gif;
  return (
    <PreviewCard onClick={() => onSelect(props)} >
    <Image src={url} />
      <Data>
      <span>{title}</span>
      </Data>
    </PreviewCard>
  );
};

export default GiphyPreview;