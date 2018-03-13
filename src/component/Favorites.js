import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import ListGiphy from './ListGimphy'

import {deleteFavorite} from '../actions'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites : this.props.favorites
    }
  }

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
          title={giphys[key].title}
          url={giphys[key].images.fixed_width.url}
          selected
          handleOnclick={() => this.handleOnclick(giphys[key])}
          showDetailButton
        />
      )
    }
    return list
  }

  handleSearch (query) {
    let filteredFavs = {}
    for (let key in this.props.favorites) {
      const {title} = this.props.favorites[key]
      const regex = RegExp(query, 'gi')
      if (regex.test(title)){
        filteredFavs[key] = this.props.favorites[key]
      }
    }
    this.setState({favorites: filteredFavs})
  }

  render () {
    if (Object.keys(this.props.favorites).length === 0) {
      return <div>Your favorites list is empty...</div>
    } else {
      return (
        <div>
          <SearchBar
            placeholder="Search on favorites"
            searchFunction={(query) => this.handleSearch(query)}
            />
          {this.listGiphy(this.state.favorites)}
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