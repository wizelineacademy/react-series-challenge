import React, { Component } from 'react'
import { connect } from 'react-redux'
import contentActions from '../../actions/content'
import Header from '../Header'
import Searchbar from '../Searchbar'
import Item from '../Item'

const {
  addToFavContent,
  removeFavContent,
} = contentActions.actions

const Content = ({data, onClickFav, favorites, filter}) => {
  const loading = !data
  if(loading){
    return(
      <div> loading ... </div>
    )
  }

  return Object.keys(data).map((key, index) => {
    if(data[key].title.search(filter) > -1){
      return(
        <Item key={index}
          item={data[key]}
          onClickFav={onClickFav}
          isFav={favorites[key] ? true : false}
        />
      )
    }
    return null
  })

}

class Favorites extends Component {

  constructor(props) {
    super(props)
    this.toogleFavorite = this.toogleFavorite.bind(this)
    this.state = {
      searchTerm: ''
    }
  }

  toogleFavorite(item, isFav) {
    if(!isFav){
      this.props.addToFavContent(item)
    }
    else {
      this.props.removeFavContent(item)
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({searchTerm: e.target.value})
    }
  }

  render() {
    return(
      <div>
        <Header/>
        <Searchbar
          handleKeyPress={this.handleKeyPress}
        />
        <Content
          data={this.props.content.favorites}
          onClickFav={this.toogleFavorite}
          favorites={this.props.content.favorites}
          filter={this.state.searchTerm}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavContent: (item) => {
      dispatch(addToFavContent(item))
    },
    removeFavContent: (item) => {
      dispatch(removeFavContent(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

