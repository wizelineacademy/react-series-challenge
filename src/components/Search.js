import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifGallery from './GifGallery';

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
  loading: state.search.searching,
  gifs: state.search.gifs
});

export default connect(mapStateToProps)(Search);
