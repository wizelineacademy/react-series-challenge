import React from "react";

import Tile from "../Tile";
import { Loader } from "../../shared";
import { TilesWrapperStyled } from "./TileList.styled";

const TileList = ({ gifs, loading }) => {
  if (loading) return <Loader />;

  return (
    <TilesWrapperStyled>
      {gifs.map(gif => <Tile key={gif.id} gif={gif} />)}
    </TilesWrapperStyled>
  );
};

export default TileList;
