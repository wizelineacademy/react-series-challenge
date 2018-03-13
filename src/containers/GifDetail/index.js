import { connect } from 'react-redux'
import favoritesActions from '../../actions/favorites'
import searchActions from '../../actions/search'
import GifDetail from '../../components/GifDetail'

const mapStateToProps = (state) => ({
  gif: state.activeGif,
  favoriteGifs: state.favoriteGifs
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
