import Home from "../components/Home";
import {fetchTrendingGifs} from "../actions/trending";
import {connect} from "react-redux";

const mapStateToProps = ({trending}) => ({
  trending
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrendingGifs: () => dispatch(fetchTrendingGifs())
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
