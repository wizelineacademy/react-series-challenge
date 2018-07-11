import React from "react";
import FavoriteGifs from "../Components/Favorites/FavoriteGifs";
import SearchInput from "../Components/Search/SearchInput";

const Favorites = () => (
  <React.Fragment>
    <SearchInput fromFavorites />
    <FavoriteGifs />
  </React.Fragment>
);

export default Favorites;
