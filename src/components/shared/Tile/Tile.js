import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ImageLoader from "../ImageLoader";
import { getColor } from "../../../utils";
import actions from "../../Favs/FavsActions";
import { TileWrapperStyled, FavoriteMarkStyled } from "./Tile.styled";

const Tile = ({ gif, size, toggleFavorite }) => {
  return (
    <TileWrapperStyled size={size} color={getColor()}>
      <FavoriteMarkStyled
        onClick={() => toggleFavorite(gif)}
        marked={gif.favorite}
      >
        ❤
      </FavoriteMarkStyled>
      <ImageLoader image={gif} size={size} />
    </TileWrapperStyled>
  );
};

const mapDispatchToProps = dispatch => {
  const { toggleFavorite } = actions.creators;
  return bindActionCreators({ toggleFavorite }, dispatch);
};

export default connect(null, mapDispatchToProps)(Tile);
