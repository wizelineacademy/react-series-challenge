import React from "react";
import { GiItem } from "../../../components";

const GiPanel = props => {
  return props.data.map(giphy => (
    <GiItem
      giphy={giphy}
      key={giphy.id}
      toggleFavs={props.toggleFavs}
      selectedFavs={props.selectedFavs}
    />
  ));
};

export default GiPanel;
