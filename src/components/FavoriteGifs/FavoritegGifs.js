import React from "react";
import { connect } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const FavoritesGifs = ({ favoriteGifs, searchFavoriteGifs }) => {
  if (Object.keys(searchFavoriteGifs).length) {
    const filterFavoriteGifs = Object.keys(favoriteGifs)
    .filter(key => searchFavoriteGifs.includes(key))
    .reduce((obj, key) => {
      obj[key] = favoriteGifs[key];
      return obj
    }, {});
    return (
      Object.keys(filterFavoriteGifs).map(key => (
        <div key={key}>
          <img src={favoriteGifs[key].images.preview_gif.url} alt="Gif item" />
          <FavoriteButton gif={favoriteGifs[key]} key={favoriteGifs[key].id} />
        </div>
      ))
    )
  }
  return(
    Object.keys(favoriteGifs).map(key => (
      <div key={key}>
        <img src={favoriteGifs[key].images.preview_gif.url} alt="Gif item" />
        <FavoriteButton gif={favoriteGifs[key]} key={favoriteGifs[key].id} />
      </div>
    ))
  )
};

const mapStateToProps = ({ favoriteGifs, searchFavoriteGifs }) => ({
  favoriteGifs,
  searchFavoriteGifs
});

export default connect(
  mapStateToProps,
  null
)(FavoritesGifs);
