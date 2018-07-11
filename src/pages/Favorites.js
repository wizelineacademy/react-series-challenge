import React from "react";
import FavoriteGifs from "../components/FavoriteGifs/FavoriteGifs";
import { ContainerListGifs } from "./HomeStyle";

const Favorites = () => (
  <ContainerListGifs>
    <FavoriteGifs />
  </ContainerListGifs>
);

export default Favorites;
