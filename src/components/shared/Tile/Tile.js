import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import ImageLoader from "../ImageLoader";
import { getColor } from "../../../utils";
import actions from "../../Favs/FavsActions";
import { TileWrapperStyled, FavoriteMarkStyled } from "./Tile.styled";

const Tile = ({ gif, size, match, toggleFavorite }) => (
  <Link to={`/details/${gif.id}`}>
    <TileWrapperStyled size={size} color={getColor()}>
      <FavoriteMarkStyled
        marked={gif.favorite}
        onClick={event => {
          event.preventDefault();
          toggleFavorite(gif);
        }}
      >
        ❤
      </FavoriteMarkStyled>
      <ImageLoader image={gif} size={size} />
    </TileWrapperStyled>
  </Link>
);

const mapDispatchToProps = dispatch => {
  const { toggleFavorite } = actions.creators;
  return bindActionCreators({ toggleFavorite }, dispatch);
};

export default connect(null, mapDispatchToProps)(Tile);
