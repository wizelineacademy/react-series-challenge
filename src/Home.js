import React, { Component } from 'react';
import GifList from './GifList';
import { connect } from 'react-redux';
import { fetchTrendingGifs } from './actions/giphyApi'

class Home extends Component {
  componentDidMount() {
    this.props.fetchTrendingGifs();
  }

  render() {
    const { trendingGifs } = this.props;
    return (
      <div>
        <GifList gifs={trendingGifs} />
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => {
  const { giphyApi } = state;
  const { trendingGifs } = giphyApi;
  return { trendingGifs };
}

const mapDispatchToProps = {
  fetchTrendingGifs
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);