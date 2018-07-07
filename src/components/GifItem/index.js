import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  padding: 8px;
  border-color: #000;
  border-width: 4px;
  border-color: #000;
  box-shadow: 1px 1px 1px #000;
  margin: 4px 10px;
  flex: 0.33;
`;

const GifImg = styled.img`
  width: 145px;
`;

const GifItem = ({ gif }) => {
  return (
    <ItemWrapper>
      <GifImg alt={gif.slug} src={gif.images.preview_gif.url} />
      <p>{gif.title}</p>
      <p>
        URL: <a href={gif.bitly_url}>{gif.bitly_url}</a>
      </p>
      <p>by: {gif.username}</p>
      <a href="#">Add to my favs.</a>
    </ItemWrapper>
  );
};

export default GifItem;
