import React, { Component, Fragment } from 'react';
import GifList from './GifList';
import { connect } from 'react-redux';
import { fetchTrendingGifs } from '../actions/giphyApi'
import { toggleFavoriteGif } from '../actions/favorites';
import NavBar from './NavBar';

class Home extends Component {
  componentDidMount() {
    this.props.fetchTrendingGifs();
  }

  handleGifLikeClick = (gif) => {
    this.props.toggleFavoriteGif(gif);
  }

  render() {
    const { gifs } = this.props;
    return (
      <Fragment>
        <NavBar onSearch={(search) => this.props.fetchTrendingGifs(search)} />
        <div>
          <GifList
            onLikeClick={this.handleGifLikeClick}
            gifs={gifs}
          />
        </div>
      </Fragment>
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