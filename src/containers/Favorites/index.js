import { connect } from 'react-redux'
import favoritesActions from '../../actions/favorites'
import GifList from '../../components/GifList'

const mapStateToProps = (state) => ({
  gifs: state.favoriteGifs,
  favoriteGifs: state.favoriteGifs
})

const mapDispatchToProps = dispatch => ({
  setFavorite: (gif) => dispatch(favoritesActions.creators.setFavorite(gif))
})

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifList)

export default FavoritesContainer
