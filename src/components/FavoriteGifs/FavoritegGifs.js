import React from "react";
import { connect } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const FavoritesGifs = ({ favoriteGifs }) => {
  return(
    Object.keys(favoriteGifs).map(key => (
      <div key={key}>
        <img src={favoriteGifs[key].images.preview_gif.url} alt="Gif item" />
        <FavoriteButton gif={favoriteGifs[key]} key={favoriteGifs[key].id} />
      </div>
    ))
  )
};

const mapStateToProps = ({ favoriteGifs }) => ({
  favoriteGifs
});

export default connect(
  mapStateToProps,
  null
)(FavoritesGifs);
