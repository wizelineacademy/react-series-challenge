import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleFavoriteGif } from '../actions/favorites';
import GifList from './GifList';
import NavBar from './NavBar';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesSearch: '',
    };
  }

  handleGifLikeClick = (gif) => {
    this.props.toggleFavoriteGif(gif);
  }

  render() {
    const { gifs } = this.props;
    const filteredGifs = this.getFilteredGifs(gifs);
    return (
      <Fragment>
        <NavBar onSearch={(search) => this.setState({ favoritesSearch: search })} />
        <div>
          <GifList
            onLikeClick={this.handleGifLikeClick}
            gifs={filteredGifs}
          />
        </div>
      </Fragment>
    );
  }

  getFilteredGifs = (gifs) => {
    const { favoritesSearch } = this.state;
    if (favoritesSearch) {
      const filteredGifs = {};
      for (let key in gifs) {
        const item = gifs[key];
        if (item.title.includes(favoritesSearch)) {
          filteredGifs[item.id] = item;
        }
      }
      return filteredGifs;
    } else {
      return gifs;
    }
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