import { connect } from 'react-redux'
import searchActions from '../../actions/search'
import favoritesActions from '../../actions/favorites'
import GifList from '../../components/GifList'

const mapStateToProps = (state) => ({
  gifs: state.searchGifs,
  favoriteGifs: state.favoriteGifs
})

const mapDispatchToProps = dispatch => ({
  searchGifs: (payload) => dispatch(searchActions.creators.requestSearchGifs(payload)),
  setFavorite: (gif) => dispatch(favoritesActions.creators.setFavorite(gif))
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifList)

export default SearchContainer
