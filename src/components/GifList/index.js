import React, { Component } from 'react'
import {
  GifWrapper,
  GifStyledList
} from './GifList.style'
import GifItem from '../GifItem'
import Menu from '../Menu'
import SearchBar from '../SearchBar'

class GifList extends Component {

  componentWillMount() {
    const { location, match, gifs } = this.props
    const isSearchApi = location.pathname.split('/')[1] === 'search';
    const isSearchFavs = location.pathname.split('/')[2] ==='search'
    if (this.props.requestGifs){
      this.props.requestGifs()
    }
    if (isSearchApi && gifs.length === 0) {
      this.props.searchGifs(match.params.term)
    }
    if (isSearchFavs && gifs.length === 0) {
      this.props.searchFavs(match.params.term)
    }
  }

  checkIfFavorite(id) {
    const fav = this.props.favoriteGifs.find(gif => gif.id === id)
    return (fav) ? true : false
  }

  renderGifsIfExist() {
    if(Array.isArray(this.props.gifs)){
      return(
        <GifStyledList>
          {this.props.gifs.map(gif => {
            const isFavorite = this.checkIfFavorite(gif.id)
            return(
              <GifItem
                key={gif.id}
                gif={gif}
                setFavorite={this.props.setFavorite}
                isFavorite={isFavorite}
              />
            )
          })}
        </GifStyledList>
      )
    }
  }
  render() {
    const { location } = this.props
    const fav = location.pathname.split('/')[1];
    return(
      <GifWrapper>
        <SearchBar searchGifs={(fav !== 'favorites') ? this.props.searchGifs : this.props.searchFavs}/>
        <Menu location={this.props.location.pathname} />
        {this.renderGifsIfExist()}
      </GifWrapper>
    )
  }
}

export default GifList
