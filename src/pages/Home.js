import React from "react";
import ListGifs from "../components/ListGifs/ListGifs";

import { ContainerListGifs } from "./HomeStyle";

const Home = () => {
  return (
    <ContainerListGifs>
      <ListGifs />
    </ContainerListGifs>
  );
};

export default Home;
