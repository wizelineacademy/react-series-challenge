import { connect } from 'react-redux'
import favoritesActions from '../../actions/favorites'
import Favorites from '../../components/Favorites'

const mapStateToProps = (state) => ({
  favoriteGifs: state.favoriteGifs
})

const mapDispatchToProps = dispatch => ({
  setFavorite: (gif) => dispatch(favoritesActions.creators.setFavorite(gif))
})

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites)

export default FavoritesContainer
