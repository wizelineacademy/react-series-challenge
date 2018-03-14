import GifCard from "../components/GifCard";
import {connect} from "react-redux";
import {toggleFavorite} from "../actions/favorite";

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (gif) => dispatch(toggleFavorite(gif)),
});

const GifCardContainer = connect(
  null,
  mapDispatchToProps
)(GifCard);

export default GifCardContainer;
