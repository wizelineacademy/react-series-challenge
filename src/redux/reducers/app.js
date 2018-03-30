import { handleActions } from 'redux-actions';

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

export const initialState = {
  gifs: [],
  searchAPI: '',
  favoriteGifs: [],
  filter: { limit: 25, offset: 0, fmt: 'json' },
  error: {}
};

export const app = handleActions(
  {
    [BEGIN_GET_GIFS_TRENDING_GIFS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.gifs = [];
      return state;
    },
    [SUCCESS_GET_GIFS_TRENDING_GIFS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.gifs = [];
      for (let gif of action.gifs) {
        state.gifs.push({ ...gif });
      }
      return state;
    },
    [ERROR_GET_GIFS_TRENDING_GIFS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.error = action.error;
      return state;
    },
    [BEGIN_SEARCH_GIF_API]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      return state;
    },
    [SUCCESS_SEARCH_GIF_API]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.gifs = [];
      for (let gif of action.gifs) {
        state.gifs.push(gif);
      }
      return state;
    },
    [ERROR_SEARCH_GIF_API]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.error = action.error;
      return state;
    },
    [HANDLE_FAVORITE_CHANGE]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      return state;
    },
    [SET_NEW_STATUS_FAVORITES]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.favoriteGifs = action.favorites;
      return state;
    }
  },
  initialState
);
