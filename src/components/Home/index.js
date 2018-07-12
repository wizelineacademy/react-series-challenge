import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'
import * as actionTypes from '../../actions'

import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      loading: false,
      title: 'Trending Now'
    }
  }

  componentDidMount() {
    const { query } = this.state
    this.props.onFetchData(query)
  }

  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }


  render() {
    const { trendingGifs, query, loading, title } = this.state
    return(
      <Fragment>
        <Nav />
        <SearchBar
          value={query}
          updateQuery={ (e) => this.updateQuery(e) }
          handleSearch={this.props.onFetchData}
        />
        {
          loading
            ? 'Cargando ...'
            : <Gifs gifs={this.props.gifs} title={title} addFavorites={this.props.onToggleFavorite}/>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleFavorite: (item) => dispatch(actionTypes.favoriteToggleStart(item)),
    onFetchData: (query) => dispatch(actionTypes.fetchDataRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)