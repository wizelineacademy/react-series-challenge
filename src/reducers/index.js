import initialState from './initialState';
import actions from "../actions";

const { 
  TRENDING_FETCHED, 
  SEARCH_FETCHED, 
  TOGGLE_FAVORITE,
  LOAD_SAVED_FAVORITES
} = actions.types;

const mapFavoritesToList = (items, favorites) => (
  items.map((item) => ({
    ...item,
    favorite: favorites.find((fav) => (fav.id == item.id))? true : false
  }))
)

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_FETCHED:
      var newState = { ...state };
      newState['trendingGifs'] = action.payload.data.map((gif) => ({
        url: gif.images.fixed_height_downsampled.url,
        original: gif.images.original.url,
        id: gif.id,
        favorite: state.favorites.find((fav) => (fav.id == gif.id))? true : false
      }));
      return newState;

    case SEARCH_FETCHED:
      var newState = { ...state };
      newState['searchResults'] = action.payload.data.map((gif) => ({
        url: gif.images.fixed_height_downsampled.url,
        original: gif.images.original.url,
        id: gif.id,
        favorite: state.favorites.find((fav) => (fav.id == gif.id))? true : false
      }));
      newState['searchQuery'] = action.payload.query;
      return newState;

    case TOGGLE_FAVORITE:
      var newState = { ...state };
      if (state.favorites.find((element) => (
        element.id == action.payload.id
      ))) {
        newState.favorites = state.favorites.filter((element) => (
          element.id != action.payload.id
        ))
      } else {
        newState.favorites = state.favorites.concat(
          [{...action.payload.gif, favorite: true}]
        )
      }
      newState['searchResults'] = mapFavoritesToList(
        newState['searchResults'],
        newState['favorites']
      )
      newState['trendingGifs'] = mapFavoritesToList(
        newState['trendingGifs'],
        newState['favorites']
      )
      return newState;

    case LOAD_SAVED_FAVORITES:
      var newState = { ...state };
      try {
        newState['favorites'] = JSON.parse(localStorage.getItem('gif-favs')) || [];
      } catch (e) {
        console.warn(e);
      }
      return newState;

    default:
      return state;
  }
}

export default rootReducer;