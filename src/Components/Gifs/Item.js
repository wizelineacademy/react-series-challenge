import React from "react";
import { connect } from "react-redux";
import { ItemStyled, ItemButtonStyled } from "./Item.styled";

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

  console.log(item.id in favoriteItems);
  return (
    <ItemStyled>
      <img src={url} alt={title} width={width} height={height} />
      <ItemButtonStyled
        onClick={() => {
          onToggleFavorite(item);
        }}
        isFavorite={item.id in favoriteItems}
      >
        <i className="far fa-thumbs-up" />
      </ItemButtonStyled>
    </ItemStyled>
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
