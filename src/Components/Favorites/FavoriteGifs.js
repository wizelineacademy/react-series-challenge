import React from "react";
import { connect } from "react-redux";

import Item from "../Gifs/Item";
import { ContainerStyled } from "../../theme/Container.styled";

const FavoriteGifs = ({ favorites: { items, filtered }, searchFavorite }) => {
  const favoritesArr = Object.keys(items);
  if (!favoritesArr.length) return <p>No hay favoritos</p>;

  if (!filtered)
    return (
      <ContainerStyled>
        {favoritesArr.map(key => <Item key={key} item={items[key]} />)}
      </ContainerStyled>
    );

  if (!filtered.length && searchFavorite)
    return (
      <div>
        No se encontraron gifs en favoritos para <b>{searchFavorite}</b>
      </div>
    );

  return (
    <ContainerStyled>
      {filtered
        .filter(item => favoritesArr.find(fav => fav === item.id))
        .map(item => <Item key={item.id} item={item} />)}
    </ContainerStyled>
  );
};

const mapStateToProps = state => {
  const {
    favorites,
    search: { searchFavorite }
  } = state;
  return {
    favorites,
    searchFavorite
  };
};

export default connect(
  mapStateToProps,
  null
)(FavoriteGifs);
