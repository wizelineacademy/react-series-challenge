import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTrendingRequest } from '../actions/trending';
import GifGallery from './GifGallery';
import { isTrendingLoading, getTrendingGifs } from '../selectors/trending';

export class Home extends Component {
  componentDidMount() {
    const { loadTrendingRequest } = this.props;
    loadTrendingRequest();
  }

  render() {
    const { loading, gifs } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <GifGallery gifs={gifs} />
    );
  }
}

const mapStateToProps = state => ({
  loading: isTrendingLoading(state),
  gifs: getTrendingGifs(state)
});

const mapDispatchToProps = {
  loadTrendingRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
