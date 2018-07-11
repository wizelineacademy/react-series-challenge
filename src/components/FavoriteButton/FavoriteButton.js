import React from "react";
import { connect } from "react-redux";
import { Button } from "./FavoriteButtonStyled";

const AddTransactionButton = ({ gif, addFavoriteGif, favorite }) => (
  <Button favorite={favorite} onClick={() => addFavoriteGif(gif)}>
    <i className="fas fa-heart" />
  </Button>
);

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteGif: gif => dispatch({ type: "ADD_FAVORITE_GIF", payload: gif })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTransactionButton);
