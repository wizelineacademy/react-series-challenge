import React from "react";

const GiItem = props => {
  const { giphy } = props;

  const img = giphy.images["fixed_width"];

  return <img src={img.url} alt={giphy.title} />;
};

export default GiItem;
