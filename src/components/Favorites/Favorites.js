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

const Content = ({data, onClickFav, favorites}) => {
  const loading = !data
  if(loading){
    return(
      <div> loading ... </div>
    )
  }

  return Object.keys(data).map((key, index) => (
    <Item key={index}
      item={data[key]}
      onClickFav={onClickFav}
      isFav={favorites[key] ? true : false}
    />
  ))

}

class Favorites extends Component {

  constructor(props) {
    super(props)
    this.toogleFavorite = this.toogleFavorite.bind(this)
  }

  toogleFavorite(item, isFav) {
    if(!isFav){
      this.props.addToFavContent(item)
    }
    else {
      this.props.removeFavContent(item)
    }
  }

  render() {
    return(
      <div>
        <Header/>
        <Searchbar/>
        <Content
          data={this.props.content.favorites}
          onClickFav={this.toogleFavorite}
          favorites={this.props.content.favorites}
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

