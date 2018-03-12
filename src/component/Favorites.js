import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import ListGiphy from './ListGimphy'

import {deleteFavorite} from '../actions'

class Favorites extends Component {

  handleOnclick (giphy) {
    this.props.deleteFavorite(giphy)
  }

  listGiphy (giphys) {
    let list = []
    for (let key in giphys){
      list.push(
        <ListGiphy
          key={giphys[key].id}
          gimphyId={giphys[key].id}
          url={giphys[key].images.fixed_width.url}
          selected
          handleOnclick={() => this.handleOnclick(giphys[key])}
        />
      )
    }
    return list
  }

  render () {
    if (Object.keys(this.props.favorites).length === 0) {
      return <div>Your favorites list is empty...</div>
    } else {
      return (
        <div>
          <SearchBar />
          {this.listGiphy(this.props.favorites)}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites
  }
}

export default connect(mapStateToProps,{deleteFavorite})(Favorites)