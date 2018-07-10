import React from "react";
import ListGifs from "../components/ListGifs/ListGifs";

import { ContainerListGifs } from "./HomeStyle";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <ContainerListGifs>
        <ListGifs />
      </ContainerListGifs>
    </div>
  );
};

export default Home;
