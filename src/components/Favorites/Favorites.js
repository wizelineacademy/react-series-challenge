import React, { Component } from 'react'
import { connect } from 'react-redux'
import contentActions from '../../actions/content'
import Header from '../Header'
import Searchbar from '../Searchbar'
import Content from '../Content'

const {
  addToFavContent,
  removeFavContent,
} = contentActions.actions


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

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return(
      <div>
        <Searchbar
          handleChange={this.handleChange}
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

