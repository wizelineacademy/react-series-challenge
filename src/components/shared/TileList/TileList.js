import React from "react";

import Tile from "../Tile";
import { TilesWrapperStyled } from "./TileList.styled";

const Placeholder = () => "loading...";

const TileList = ({ gifs, fetching }) => {
  if (fetching) return <Placeholder />;

  return (
    <TilesWrapperStyled>
      {gifs.length ? gifs.map(gif => <Tile key={gif.id} gif={gif} />) : "nope"}
    </TilesWrapperStyled>
  );
};

export default TileList;
