import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

class ListGifs extends Component {
  componentDidMount() {
    const { getTrendingGifs } = this.props;
    getTrendingGifs();
  }
  render() {
    const { gifs, sGifs } = this.props;
    if (!sGifs.length) {
      return gifs.map(gif => (
        <div key={gif.id}>
          <img src={gif.images.preview_gif.url} alt="Gif item" />
          <FavoriteButton gif={gif} />
        </div>
      ));
    }
    return sGifs.map(gif => (
      <div key={gif.id}>
        <img src={gif.images.preview_gif.url} alt="Gif item" />
        <FavoriteButton gif={gif} key={gif.id} />
      </div>
    ));
  }
}

const mapStateToProps = ({ gifs, sGifs }) => ({
  sGifs: sGifs.searchGifs,
  gifs: gifs.gifs
});

const mapDispatchToProps = dispatch => {
  return {
    getTrendingGifs: () => dispatch({ type: "GET_TRENDING_GIFS" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGifs);
