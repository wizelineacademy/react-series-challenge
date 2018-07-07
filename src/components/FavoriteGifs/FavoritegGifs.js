import React from "react";
import { connect } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const FavoritesGifs = ({ fGifs }) =>
  Object.keys(fGifs).map(key => (
    <div key={key}>
      <img src={fGifs[key].images.preview_gif.url} alt="Gif item" />
      <FavoriteButton gif={fGifs[key]} key={fGifs[key].id} />
    </div>
  ));

const mapStateToProps = ({ fGifs }) => ({
  fGifs: fGifs.fGifs
});

export default connect(
  mapStateToProps,
  null
)(FavoritesGifs);
