import {
  BEGIN_GET_GIFS_TRENDING_GIFS,
  SUCCESS_GET_GIFS_TRENDING_GIFS,
  ERROR_GET_GIFS_TRENDING_GIFS,
  BEGIN_SEARCH_GIF_API,
  SUCCESS_SEARCH_GIF_API,
  ERROR_SEARCH_GIF_API,
  HANDLE_FAVORITE_CHANGE,
  SET_NEW_STATUS_FAVORITES
} from '../types';

export const fetchTrendingGifs = filter => ({
  type: BEGIN_GET_GIFS_TRENDING_GIFS,
  filter
});

export const fetchTrendingGifsCompleted = gifs => ({
  type: SUCCESS_GET_GIFS_TRENDING_GIFS,
  gifs
});

export const fetchTrendingGifsFailed = error => ({
  type: ERROR_GET_GIFS_TRENDING_GIFS,
  error
});

export const searchGIFAPI = search => ({
  type: BEGIN_SEARCH_GIF_API,
  search
});

export const searchGIFAPICompleted = gifs => ({
  type: SUCCESS_SEARCH_GIF_API,
  gifs
});

export const searchGIFAPIFailed = error => ({
  type: ERROR_SEARCH_GIF_API,
  error
});

export const handleFavoriteChange = id => ({
  type: HANDLE_FAVORITE_CHANGE,
  id
});

export const setNewFavoriteStatus = favorites => ({
  type: SET_NEW_STATUS_FAVORITES,
  favorites
});
