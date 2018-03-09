import { connect } from 'react-redux'
import trendingActions from '../../actions/trending'
import Trending from '../../components/Trending'

const mapStateToProps = (state) => ({
  trendingGifs: state.trendingGifs
})

const mapDispatchToProps = dispatch => ({
  requestTrendingGifs: () => dispatch(trendingActions.creators.requestTrendingGifs())
})

const TrendingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending)

export default TrendingContainer
