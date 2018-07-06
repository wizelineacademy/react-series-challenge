import React from "react";
import GifsList from "../GifsList";
import styled from "styled-components";

const ItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Home = ({ gifs, loading }) => {
  return (
    <div>
      <h1>Trending GIFS</h1>
      <GifsList gifs={gifs} loading={loading} />
    </div>
  );
};

export default Home;
