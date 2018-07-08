import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const GifItem = ({ gif, favoriteGifs }) => 
   <div>
    <img src={gif.images.preview_gif.url} alt="Gif item" />
    <FavoriteButton gif={gif} />
    {!favoriteGifs[gif.id] ? null : <label>Favorito</label> }
  </div>;

export default GifItem;