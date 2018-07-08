import React, { Component } from 'react'
import { connect } from 'react-redux'
import contentActions from '../../actions/content'
import Header from '../Header'
import Searchbar from '../Searchbar'
import Item from '../Item'

const {
  startLoading,
  addToFavContent,
  removeFavContent,
  startSearch,
} = contentActions.actions

const Content = ({data, onClickFav, favorites}) => {
  const loading = !data
  if(loading){
    return(
      <div> loading ... </div>
    )
  }

  return data.data.map((item, index) => (
    <Item key={index}
      item={item}
      onClickFav={onClickFav}
      isFav={favorites[item.id] ? true : false}
    />
  ))

}

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
        <Header/>
        <Searchbar
          handleKeyPress={this.handleKeyPress}
        />
        <Content
          data={this.props.content.data}
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
