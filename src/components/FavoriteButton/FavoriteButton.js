import React from "react";
import { connect } from "react-redux";

const AddTransactionButton = ({ gif, addFavoriteGif }) => (
  <button onClick={() => addFavoriteGif(gif)}>Favorito</button>
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
