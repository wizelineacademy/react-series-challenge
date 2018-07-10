import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {ItemGif, Image } from "./GifItemStyle";

const GifItem = ({ gif, favoriteGifs }) => 
   <ItemGif>
    <Image url={gif.images.preview_webp.url} />
    <FavoriteButton gif={gif} favorite ={favoriteGifs[gif.id]} />
  </ItemGif>;

export default GifItem;