import React from "react";
import GiItem from "../../molecules/GiItem/index";

const GiPanel = props => {
  const { data } = props;
  if (data !== undefined) {
    return data.map(giphy => (
      <GiItem
        giphy={giphy}
        key={giphy.id}
        toggleFavs={props.toggleFavs}
        selectedFavs={props.selectedFavs}
      />
    ));
  }
  return <div />;
};

export default GiPanel;
