import React from "react";
import { connect } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {ItemGif, Image } from "../ListGifs/GifItemStyle";

const FavoritesGifs = ({ favoriteGifs, searchFavoriteGifs }) => {
  let filterFavoriteGifs = null;
  if (Object.keys(searchFavoriteGifs).length) {
    filterFavoriteGifs = Object.keys(favoriteGifs)
    .filter(key => searchFavoriteGifs.includes(key))
    .reduce((obj, key) => {
      obj[key] = favoriteGifs[key];
      return obj
    }, {});
  }
  return(
    Object.keys(filterFavoriteGifs || favoriteGifs).map(key => (
      <ItemGif key={key}>
        <Image src={favoriteGifs[key].images.preview_webp.url} />
        <FavoriteButton gif={favoriteGifs[key]} key={favoriteGifs[key].id} favorite />
      </ItemGif>
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
