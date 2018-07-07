import React from "react";
import ListGifs from "../Components/Gifs/ListGifs";
import SearchInput from "../Components/Search/SearchInput";

const Home = () => (
  <div>
    <SearchInput />
    <h1>Home</h1>
    <ListGifs />
  </div>
);

export default Home;
