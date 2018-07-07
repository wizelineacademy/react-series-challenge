import React from "react";
import { connect } from "react-redux";

import Item from "../Gifs/Item";

const FavoriteGifs = ({ favorites }) => {
  const favoritesArr = Object.keys(favorites);
  if (!favoritesArr.length) {
    return <p>No se encontraron favoritos</p>;
  }

  return (
    <div>
      {favoritesArr.map(key => <Item key={key} item={favorites[key]} />)}
    </div>
  );
};

const mapStateToProps = state => {
  const { favorites } = state;
  return {
    favorites
  };
};

export default connect(
  mapStateToProps,
  null
)(FavoriteGifs);
