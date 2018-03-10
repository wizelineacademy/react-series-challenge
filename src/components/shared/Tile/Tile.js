import React from "react";

import ImageLoader from "../ImageLoader";
import { TileWrapperStyled } from "./Tile.styled";

const Tile = ({ gif, size }) => (
  <TileWrapperStyled size={size}>
    <ImageLoader image={gif} size={size} />
  </TileWrapperStyled>
);

export default Tile;
