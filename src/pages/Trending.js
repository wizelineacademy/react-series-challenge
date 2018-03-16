import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchInput from '../components/SearchInput'
import GifGrid from '../components/GifGrid'

class Trending extends Component {
  render () {
    return (
      <div>
        <SearchInput />
        <GifGrid gifs={this.props.trendingGifs} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trending);

