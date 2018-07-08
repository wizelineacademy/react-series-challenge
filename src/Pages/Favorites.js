import React from "react";
import FavoriteGifs from "../Components/Favorites/FavoriteGifs";
import SearchInput from "../Components/Search/SearchInput";

const Favorites = () => (
  <div>
    <SearchInput fromFavorites />
    <FavoriteGifs />
  </div>
);

export default Favorites;
