import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

class ListGifs extends Component {
  componentDidMount() {
    const { getTrendingGifs } = this.props;
    getTrendingGifs();
  }
  render() {
    const { trendingGifs, searchGifs, favoriteGifs } = this.props;
    if(!trendingGifs.length) {
      return <div>Cargando..</div>
    }
    if (!searchGifs.length) {
      return trendingGifs.map(gif => (
        <div key={gif.id}>
          <img src={gif.images.preview_gif.url} alt="Gif item" />
          <FavoriteButton gif={gif} />
          {!favoriteGifs[gif.id] ? null : <label>Favorito</label> }
        </div>
      ));
    }
    return searchGifs.map(gif => (
      <div key={gif.id}>
        <img src={gif.images.preview_gif.url} alt="Gif item" />
        <FavoriteButton gif={gif} key={gif.id} />
        {!favoriteGifs[gif.id] ? null : <label>Favorito</label> }
      </div>
    ));
  }
}

const mapStateToProps = ({ trendingGifs, searchGifs, favoriteGifs }) => ({
  searchGifs,
  trendingGifs,
  favoriteGifs
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
