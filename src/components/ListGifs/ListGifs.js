import React, { Component } from "react";
import { connect } from "react-redux";

class ListGifs extends Component {
  componentDidMount() {
    const { getTrendingGifs } = this.props;
    getTrendingGifs();
  }
  render() {
    const { gifs, sGifs } = this.props;
    if (!sGifs.length) {
      return gifs.map(gif => (
        <img key={gif.id} src={gif.images.preview_gif.url} alt="Gif item" />
      ));
    }
    return sGifs.map(gif => (
      <img key={gif.id} src={gif.images.preview_gif.url} alt="Gif item" />
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
