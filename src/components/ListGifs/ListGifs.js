import React, { Component } from "react";
import { connect } from "react-redux";
import GifItem from "./GifItem";

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
        <GifItem key={gif.id} gif={gif} favoriteGifs={favoriteGifs} />
      ));
    }
    return searchGifs.map(gif => (
      <GifItem key={gif.id} gif={gif} favoriteGifs={favoriteGifs} />
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
