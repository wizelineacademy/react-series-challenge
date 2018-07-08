import React, { Component } from 'react';
import GifList from './GifList';
import { connect } from 'react-redux';
import { fetchTrendingGifs } from '../actions/giphyApi'
import { toggleFavoriteGif } from '../actions/favorites';

class Home extends Component {
  componentDidMount() {
    const { gifs } = this.props;
    if (Object.keys(gifs).length <= 0) {
      this.props.fetchTrendingGifs();
    }
  }

  handleGifLikeClick = (gif) => {
    this.props.toggleFavoriteGif(gif);
  }

  render() {
    const { gifs } = this.props;
    return (
      <div>
        <GifList
          onLikeClick={this.handleGifLikeClick}
          gifs={gifs}
        />
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => {
  const { giphyApi } = state;
  const { gifs } = giphyApi;
  return { gifs };
}

const mapDispatchToProps = {
  fetchTrendingGifs,
  toggleFavoriteGif,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);