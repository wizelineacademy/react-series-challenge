// Reducer store name
const NAME = 'gifs';

// Actions types
const MARK_FAVORITE = "gif/MARK_FAVORITE";
const TRENDING_FETCH_REQUESTED = "git/TRENDING_FETCH_REQUESTED";
const TRENDING_FETCH_SUCCEEDED = "git/TRENDING_FETCH_SUCCEEDED";
const TRENDING_FETCH_FAILED = "git/TRENDING_FETCH_FAILED";
const SEARCH_FETCH_REQUESTED = "git/SEARCH_FETCH_REQUESTED";
const SEARCH_FETCH_SUCCEEDED = "git/SEARCH_FETCH_SUCCEEDED";
const SEARCH_FETCH_FAILED = "git/SEARCH_FETCH_FAILED";
const UPDATE_FAVORITES_TEXT_FILTER = "git/UPDATE_FAVORITES_TEXT_FILTER";

// Initial State
const initialState = {
  fetching: false,
  displayed: [],
  favorites: [],
  favoritesTextFilter: ''
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case MARK_FAVORITE:
      const newFavoriteArray = [...state.favorites];
      if (action.status) {
        newFavoriteArray.push(action.gif);
      } else {
        const index = newFavoriteArray.indexOf(action.gif);
        if (index > -1) {
          newFavoriteArray.splice(index, 1);
        }
      }
      return {...state, favorites: newFavoriteArray};
    case TRENDING_FETCH_REQUESTED:
      return {...state, fetching: true};
    case TRENDING_FETCH_SUCCEEDED:
      return {...state, fetching: false, displayed: action.trendingGifsDetails};
    case TRENDING_FETCH_FAILED:
      return {...state, fetching: false};
    case SEARCH_FETCH_REQUESTED:
      return {...state, fetching: true};
    case SEARCH_FETCH_SUCCEEDED:
      return {...state, fetching: false, displayed: action.searchGifsDetails};
    case SEARCH_FETCH_FAILED:
      return {...state, fetching: false};
    case UPDATE_FAVORITES_TEXT_FILTER:
      return {...state, favoritesTextFilter: action.favoritesTextFilter}
    default:
      return state;
  }
}

// Selector
const selector = (state) => state[NAME];

// Actions
const markFavorite = (status, gifReference) => ({
  type: MARK_FAVORITE,
  status: status,
  gif: gifReference
});

const trendingFetchRequested = () => ({
  type: TRENDING_FETCH_REQUESTED,
});

const trendingFetchFailed = () => ({
  type: TRENDING_FETCH_FAILED,
});

const trendingFetchSucceeded = (trendingGifsDetails) => ({
  type: TRENDING_FETCH_SUCCEEDED,
  trendingGifsDetails
});

const searchFetchRequested = (text) => ({
  type: SEARCH_FETCH_REQUESTED,
  text
});

const searchFetchFailed = () => ({
  type: SEARCH_FETCH_FAILED,
});

const searchFetchSucceeded = (searchGifsDetails) => ({
  type: SEARCH_FETCH_SUCCEEDED,
  searchGifsDetails
});

const updateFavoritesTextFilter = (favoritesTextFilter) => ({
  type: UPDATE_FAVORITES_TEXT_FILTER,
  favoritesTextFilter
});

export {
  NAME,
  reducer,
  selector,
  initialState
}
export default{
  types: {
    MARK_FAVORITE,
    TRENDING_FETCH_REQUESTED,
    TRENDING_FETCH_FAILED,
    TRENDING_FETCH_SUCCEEDED,
    SEARCH_FETCH_REQUESTED,
    SEARCH_FETCH_FAILED,
    SEARCH_FETCH_SUCCEEDED
  },
  actions: {
    markFavorite,
    trendingFetchRequested,
    trendingFetchFailed,
    trendingFetchSucceeded,
    searchFetchRequested,
    searchFetchFailed,
    searchFetchSucceeded,
    updateFavoritesTextFilter
  }
}
