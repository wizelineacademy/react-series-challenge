import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import ListGiphy from './ListGimphy'

import {fetchTrend} from '../actions'

class Home extends Component {

  listGiphy = giphys => {
    console.log(giphys)
    let list = []
    for (let giphy of giphys){
      list.push(
        <ListGiphy
          key={giphy.id}
          url={giphy.images.fixed_width.url}
          selected={giphy.id in this.props.favorites}
        />
      )
    }
    return list
  }

  componentDidMount () {
    this.props.fetchTrend()
  }

  render () {
    if (!this.props.giphys) {
      return <div>Loading...........</div>
    }
    return (
      <div>
        <SearchBar />
        {this.listGiphy(this.props.giphys)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    giphys : state.home.giphys,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps,{fetchTrend})(Home)
