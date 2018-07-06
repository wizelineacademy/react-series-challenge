import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  padding: 8px;
  border-color: #000;
  border-width: 1px;
  box-shadow: 1px 1px 1px #000;
  margin: 4px;
`;

const GifImg = styled.img`
  width: 145px;
`;

const GifItem = ({ gif }) => {
  return (
    <ItemWrapper>
      <GifImg alt={gif.slug} src={gif.images.preview_gif.url} />
    </ItemWrapper>
  );
};

export default GifItem;
