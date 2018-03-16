import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchInput from '../components/SearchInput'
import GifGrid from '../components/GifGrid'

class Trending extends Component {
  render () {
    return (
      <div>
        <SearchInput />
        <GifGrid gifs={this.props.favoriteGifs} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    favoriteGifs: state.favoriteGifs
  };
}

export default connect(mapStateToProps, null)(Trending);

