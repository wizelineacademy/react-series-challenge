import {
  FETCH_TRENDING_GIPHYS,
  FETCH_GIPHYS_SEARCH,
  TOGGLE_FAVORITE_GIPHY,
  UPDATE_FAVORITES_FILTER,
  FETCH_GIPHYS_BY_IDS,
  FETCH_GIPHY_DETAIL
} from '../action_types';
import {
  fetchTrendingGiphys,
  fetchGiphysSearch,
  toggleFavoriteGiphy,
  updateFavoritesFilter,
  fetchGiphysByIds,
  fetchGiphyDetail
} from '../index';

describe('fetchTrendingGiphys', () => {
  it('should return expected action', () => {
    expect(fetchTrendingGiphys()).toEqual({
      type: FETCH_TRENDING_GIPHYS
    });
  });
});

describe('fetchGiphysSearch', () => {
  it('should return expected action', () => {
    expect(fetchGiphysSearch('term')).toEqual({
      type: FETCH_GIPHYS_SEARCH,
      payload: { term: 'term' }
    });
  });
});

describe('toggleFavoriteGiphy', () => {
  it('should return expected action', () => {
    expect(toggleFavoriteGiphy('giphy')).toEqual({
      type: TOGGLE_FAVORITE_GIPHY,
      payload: 'giphy'
    });
  });
});

describe('updateFavoritesFilter', () => {
  it('should return expected action', () => {
    expect(updateFavoritesFilter('filter')).toEqual({
      type: UPDATE_FAVORITES_FILTER,
      payload: 'filter'
    });
  });
});

describe('fetchGiphysByIds', () => {
  it('should return expected action', () => {
    expect(fetchGiphysByIds(['id1','id2'])).toEqual({
      type: FETCH_GIPHYS_BY_IDS,
      payload: ['id1','id2']
    });
  });
});

describe('fetchGiphyDetail', () => {
  it('should return expected action', () => {
    expect(fetchGiphyDetail('id1')).toEqual({
      type: FETCH_GIPHY_DETAIL,
      payload: 'id1',
    });
  });
});
