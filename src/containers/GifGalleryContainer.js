import GifGallery from "../components/GifGallery";
import {fetchTrendingGifs} from "../actions/trending";
import {connect} from "react-redux";

const mapStateToProps = ({favorites, trending}) => ({
  favorites,
  trending
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrendingGifs: () => dispatch(fetchTrendingGifs())
});

const GifGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifGallery);

export default GifGalleryContainer;
