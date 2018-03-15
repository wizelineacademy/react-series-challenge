import { connect } from 'react-redux'
import favoritesActions from '../../actions/favorites'
import searchActions from '../../actions/search'
import GifDetail from '../../components/GifDetail'

const mapStateToProps = (state) => ({
  gif: state.activeGif,
  isFavorite: (state.favoriteGifs.filter(gif => gif.id === state.activeGif.id).length > 0) ? true : false
})

const mapDispatchToProps = dispatch => ({
  setFavorite: (gif) => dispatch(favoritesActions.creators.setFavorite(gif)),
  searchGif: (gif) => dispatch(searchActions.creators.searchGif(gif))

})

const GifDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifDetail)

export default GifDetailContainer
