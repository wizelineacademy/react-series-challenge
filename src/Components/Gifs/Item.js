import React from "react";
import { connect } from "react-redux";

const Item = ({
  item,
  favorites: { items: favoriteItems },
  onToggleFavorite
}) => {
  const {
    title,
    images: {
      preview_gif: { url, height, width }
    }
  } = item;

  return (
    <span>
      <img src={url} alt={title} width={width} height={height} />
      <button
        onClick={() => {
          console.log(item);
          onToggleFavorite(item);
        }}
      >
        <i className="fas fa-heart" />
      </button>
      {item.id in favoriteItems ? "favorite" : null}
    </span>
  );
};

const mapStateToProps = state => {
  const { favorites } = state;
  return {
    favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleFavorite: item =>
      dispatch({ type: "FAVORITE_TOGGLE", payload: { item } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
