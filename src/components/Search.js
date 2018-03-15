import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifGallery from './GifGallery';
import { isSearching, getSearchGifs } from '../selectors/search';

export class Search extends Component {
  render() {
    const { loading, gifs } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    };

    return (
      <GifGallery gifs={gifs} />
    );
  }
}

const mapStateToProps = state => ({
  loading: isSearching(state),
  gifs: getSearchGifs(state)
});

export default connect(mapStateToProps)(Search);
