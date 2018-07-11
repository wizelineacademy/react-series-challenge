import React from "react";
import ListGifs from "../Components/Gifs/ListGifs";
import SearchInput from "../Components/Search/SearchInput";

const Home = () => (
  <React.Fragment>
    <SearchInput />
    <ListGifs />
  </React.Fragment>
);

export default Home;
