import React from 'react';
import styled from 'styled-components';
import Gif from './Gif';

const GifList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GifGallery = ({ gifs }) => (
  <GifList>
    {gifs.map(gif =>
      <Gif
        key={gif.id}
        gif={gif}
        imageSrc={gif.images.fixed_width.url}
      />
    )}
  </GifList>
);

export default GifGallery;
