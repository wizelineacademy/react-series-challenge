import { FETCH_TRENDING_GIPHYS, FETCH_GIPHYS_SEARCH } from  './action_types';

export const fetchTrendingGiphys = (page = 0) => {
  return {
    type: FETCH_TRENDING_GIPHYS,
    payload: {
      page
    }
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