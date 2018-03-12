import { connect } from 'react-redux'
import trendingActions from '../../actions/trending'
import favoritesActions from '../../actions/favorites'
import Trending from '../../components/Trending'

const mapStateToProps = (state) => ({
  trendingGifs: state.trendingGifs,
  favoriteGifs: state.favoriteGifs
})

const mapDispatchToProps = dispatch => ({
  requestTrendingGifs: () => dispatch(trendingActions.creators.requestTrendingGifs()),
  setFavorite: (gif) => dispatch(favoritesActions.creators.setFavorite(gif))
})

const TrendingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending)

export default TrendingContainer
