import { connect } from 'react-redux'
import trendingActions from '../../actions/trending'
import favoritesActions from '../../actions/favorites'
import searchActions from '../../actions/search'
import GifList from '../../components/GifList'

const mapStateToProps = (state) => ({
  gifs: state.trendingGifs,
  favoriteGifs: state.favoriteGifs
})

const mapDispatchToProps = dispatch => ({
  requestGifs: () => dispatch(trendingActions.creators.requestTrendingGifs()),
  setFavorite: (gif) => dispatch(favoritesActions.creators.setFavorite(gif)),
  searchGifs: (payload) => dispatch(searchActions.creators.requestSearchGifs(payload)),
})

const TrendingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifList)

export default TrendingContainer
