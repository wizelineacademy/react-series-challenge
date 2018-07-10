import React from "react";
import FavoritegGifs from "../components/FavoriteGifs/FavoritegGifs";
import { ContainerListGifs } from "./HomeStyle";

const Favorites = () => (
  <div>
    <h2>Favoritos</h2>
    <ContainerListGifs>
      <FavoritegGifs />
    </ContainerListGifs>
  </div>
);

export default Favorites;
