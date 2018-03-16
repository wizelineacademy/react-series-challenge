import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../presentational/Container'
import GiphyContainer from '../presentational/GiphyContainer';
import SearchBar from '../presentational/SearchBar';
import Giphy from '../presentational/Giphy';
import { fetchGiphysByIds, updateFavoritesFilter } from '../../actions';

class Favorites extends Component {
  componentWillMount() {
    if (this.props.list.length > 0) {
      this.props.fetchGiphysByIds(this.props.list);
    }
    this.searchFavoriteGiphys = this.searchFavoriteGiphys.bind(this);
  }

  searchFavoriteGiphys(e) {
    this.props.updateFavoritesFilter(e.target.value);
  }

  renderGiphys() {
    return this.props.giphys
      .filter(giphy => giphy.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1)
      .map(giphy => 
        <Giphy giphy={giphy} key={giphy.id} />
    );
  }

  render() {
    return (
      <Container title="My Favorite Giphys">
        <SearchBar searchFunction={this.searchFavoriteGiphys} />
        <GiphyContainer>
          { this.renderGiphys() }
        </GiphyContainer>
      </Container>
    );
  };
}

const mapStateToProps = state => {
  return state.favorites;
}

export default connect(mapStateToProps, { fetchGiphysByIds, updateFavoritesFilter } )(Favorites);
