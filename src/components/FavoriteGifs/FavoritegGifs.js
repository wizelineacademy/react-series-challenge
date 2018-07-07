import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

class FavoritesGifs extends Component {
  render() {
    const { fGifs } = this.props;
    console.log(fGifs);
    return Object.keys(fGifs).map(key => (
      <div key={key}>
        <img src={fGifs[key].images.preview_gif.url} alt="Gif item" />
        <FavoriteButton gif={fGifs[key]} key={fGifs[key].id} />
      </div>
    ));
  }
}

const mapStateToProps = ({ fGifs }) => ({
  fGifs: fGifs.fGifs
});

export default connect(
  mapStateToProps,
  null
)(FavoritesGifs);
