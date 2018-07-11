import React, { Component } from 'react'
import { connect } from 'react-redux'
import contentActions from '../../actions/content'
import Searchbar from '../Searchbar'
import Content from '../Content'

const {
  startLoading,
  addToFavContent,
  removeFavContent,
  startSearch,
} = contentActions.actions


class Home extends Component {

  constructor(props) {
    super(props)

    this.toogleFavorite = this.toogleFavorite.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    this.props.fetchData()
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
      this.props.startSearch(e.target.value)
    }
  }

  render() {
    return(
      <div>
        <Searchbar
          handleKeyPress={this.handleKeyPress}
        />
        <Content
          data={this.props.content.data}
          isLoading={this.props.content.isLoading}
          favorites={this.props.content.favorites}
          onClickFav={this.toogleFavorite}
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
    fetchData: () => {
      dispatch(startLoading())
    },
    addToFavContent: (item) => {
      dispatch(addToFavContent(item))
    },
    removeFavContent: (item) => {
      dispatch(removeFavContent(item))
    },
    startSearch: (query) => {
      dispatch(startSearch(query))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
