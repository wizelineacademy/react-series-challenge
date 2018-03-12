import Home from "../components/Home";
import {fetchTrendingGifs} from "../actions/trending";
import {connect} from "react-redux";
import {toggleFavorite} from "../actions/favorite";

const mapStateToProps = ({favorites, trending}) => ({
  favorites,
  trending
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrendingGifs: () => dispatch(fetchTrendingGifs()),
  toggleFavorite: (gif) => dispatch(toggleFavorite(gif))
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
