import GifGallery from "../components/GifGallery";
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

const GifGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifGallery);

export default GifGalleryContainer;
