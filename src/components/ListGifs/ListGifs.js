import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import trendingGifsActions from "../../actions/trendingGifs";

class ListGifs extends Component {
  componentDidMount() {
    const { getTrendingGifs } = this.props;
    getTrendingGifs();
  }
  render() {
    const { gifs } = this.props;
    return gifs.map(gif => (
      <img key={gif.id} src={gif.images.preview_gif.url} alt="Gif item" />
    ));
  }
}

const mapStateToProps = ({ gifs }) => ({
  gifs: gifs.gifs
});

const mapDispatchToProps = dispatch => {
  const { getTrendingGifs } = trendingGifsActions.creators;
  return bindActionCreators(
    {
      getTrendingGifs
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGifs);
