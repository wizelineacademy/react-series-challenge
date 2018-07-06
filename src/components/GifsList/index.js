import React from "react";
import GiftItem from "../GifItem";
import styled from "styled-components";

const ItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GifsList = ({ gifs, loading }) => {
  return (
    <ItemsWrapper>
      {gifs.map(gif => <GiftItem key={gif.id} gif={gif} />)}
    </ItemsWrapper>
  );
};

export default GifsList;
