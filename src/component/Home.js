import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import ListGiphy from './ListGimphy'

import {fetchTrend, addFavorite, deleteFavorite, searchOnWeb} from '../actions'

export class Home extends Component {

  handleOnclick (giphy) {
    if (giphy.id in this.props.favorites) {
      this.props.deleteFavorite(giphy)
    }else{
      this.props.addFavorite(giphy)
    }
    
  }

  listGiphy (giphys) {
    let list = []
    for (let giphy of giphys){
      list.push(
        <ListGiphy
          key={giphy.id}
          gimphyId={giphy.id}
          title={giphy.title}
          url={giphy.images.fixed_width.url}
          selected={giphy.id in this.props.favorites}
          handleOnclick={() => this.handleOnclick(giphy)}
          showDetailButton
        />
      )
    }
    return list
  }

  componentDidMount () {
    this.props.fetchTrend()
  }

  handleSearch (query) {
    if (query) {
      this.props.searchOnWeb(query)
    } else {
      this.props.fetchTrend()
    }
  }

  render () {
    if (this.props.giphys.length === 0) {
      return <div>Loading...........</div>
    }
    return (
      <div>
        <SearchBar
          searchFunction={(query) => this.handleSearch(query)}
          placeholder="Search on the web"
        />
        {this.listGiphy(this.props.giphys)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    giphys : state.gimphyList.giphys,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps,{fetchTrend, addFavorite, deleteFavorite, searchOnWeb})(Home)
