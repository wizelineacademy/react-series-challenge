import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import constants from "./TileConstants";
import ImageLoader from "../ImageLoader";
import { getColor } from "../../../utils";
import actions from "../../Favs/FavsActions";
import { TileWrapperStyled, FavoriteMarkStyled } from "./Tile.styled";

const Tile = ({ gif, original, favs, loaded, toggleFavorite }) => {
  const dimensions = original ? gif.images.original : constants;
  const { width, height } = dimensions;

  gif.favorite = favs.some(fav => fav.id === gif.id);

  const handleClick = event => {
    event.preventDefault();
    toggleFavorite(gif);
  };

  return (
    <Link to={`/details/${gif.id}`}>
      <TileWrapperStyled color={getColor()} width={width} height={height}>
        {loaded[gif.id] && (
          <FavoriteMarkStyled marked={gif.favorite} onClick={handleClick}>
            ❤
          </FavoriteMarkStyled>
        )}
        <ImageLoader
          image={gif}
          width={width}
          height={height}
          original={original}
        />
      </TileWrapperStyled>
    </Link>
  );
};

const mapStateToProps = state => {
  const { favs } = state.favsReducer;
  const { loaded } = state.imageLoaderReducer;
  return { favs, loaded };
};

const mapDispatchToProps = dispatch => {
  const { toggleFavorite } = actions.creators;
  return bindActionCreators({ toggleFavorite }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
