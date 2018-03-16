import {
  FETCH_TRENDING_GIPHYS,
  FETCH_GIPHYS_SEARCH,
  TOGGLE_FAVORITE_GIPHY,
  UPDATE_FAVORITES_FILTER,
  FETCH_GIPHYS_BY_IDS,
  FETCH_GIPHY_DETAIL
} from './action_types';

export const fetchTrendingGiphys = () => {
  return {
    type: FETCH_TRENDING_GIPHYS,
  };
}

export const fetchGiphysSearch = (term) => {
  return {
    type: FETCH_GIPHYS_SEARCH,
    payload: {
      term
    }
  }
}

export const toggleFavoriteGiphy = (giphyId) => {
  return {
    type: TOGGLE_FAVORITE_GIPHY,
    payload: giphyId
  }
}

export const updateFavoritesFilter = (term) => {
  return {
    type: UPDATE_FAVORITES_FILTER,
    payload: term
  }
}

export const fetchGiphysByIds = (giphyIds) => {
  return {
    type: FETCH_GIPHYS_BY_IDS,
    payload: giphyIds
  };
}

export const fetchGiphyDetail = (giphyId) => {
  return {
    type: FETCH_GIPHY_DETAIL,
    payload: giphyId
  };
}