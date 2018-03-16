import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchInput from '../components/SearchInput'
import GifGrid from '../components/GifGrid'

class Search extends Component {
  render () {
    return (
      <div>
        <SearchInput />
        <GifGrid gifs={this.props.gifs} />
      </div>
    )
  }

  componentDidMount () {
    this.props.search(this.props.match.params.query)
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.trendingGifs
  };
}

function mapDispatchToProps (dispatch) {
  return {
    search: (query) => dispatch({ type: 'FETCH_SEARCH', query }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

