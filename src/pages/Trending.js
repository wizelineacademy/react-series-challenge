import React, { Component } from 'react'
import { connect } from 'react-redux'

import GifGrid from '../components/GifGrid'

class Home extends Component {
  render () {
    return (
      <GifGrid gifs={this.props.trendingGifs} />
    )
  }

  componentDidMount () {
    this.props.fetch()
  }
}

function mapStateToProps(state) {
  return {
    trendingGifs: state.trendingGifs
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetch: () => dispatch({ type: 'FETCH_TRENDING' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

