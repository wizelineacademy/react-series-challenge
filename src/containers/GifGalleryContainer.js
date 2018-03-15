import GifGallery from "../components/GifGallery";
import {fetchTrendingGifs} from "../actions/trending";
import {connect} from "react-redux";
import {fetchSearchGifs} from "../actions/search";
import {updateFilteredFavorites} from "../actions/favorite";

const mapStateToProps = ({favorites, trending}) => ({
  favorites,
  trending
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrendingGifs: () => dispatch(fetchTrendingGifs()),
  fetchSearchGifs: (toSearch) => dispatch(fetchSearchGifs(toSearch)),
  updateFilteredFavorites: (filteredFavorites) => dispatch(updateFilteredFavorites(filteredFavorites))
});

const GifGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifGallery);

export default GifGalleryContainer;
