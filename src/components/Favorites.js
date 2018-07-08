import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavoriteGif } from '../actions/favorites';
import GifList from './GifList';

class Favorites extends Component {

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
  const { favorites } = state;
  const { gifs } = favorites;
  return { gifs };
}

const mapDispatchToProps = {
  toggleFavoriteGif,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);