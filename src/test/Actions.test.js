import actions from '../actions';
import { mockGif } from './mocks';

const {
  GET_TRENDING,
  TRENDING_FETCHED,
  GET_SEARCH,
  SEARCH_FETCHED,
  TOGGLE_FAVORITE,
  LOAD_SAVED_FAVORITES,
  FILTER_FAVORITES
} = actions.types;

const {
  getTrendingGifs,
  trendingGifsFetched,
  searchGifs,
  searchGifsFetched,
  toggleFavorite,
  loadSavedFavorites,
  filterFavorites
} = actions.creators;

describe('Actions', ()  => {

  it('Action types should match snapshot', () => {
    expect(actions.types).toMatchSnapshot();
  });

  it('getTrendingGifs should match snapshot', () => {
    expect(getTrendingGifs()).toMatchSnapshot();
  });

  it('test trendingGifsFetched', () => {
    expect(trendingGifsFetched({ data: 'data'})).toEqual({
      type: TRENDING_FETCHED, 
      payload: { data: 'data' }
    })
  });

  it('test searchGifs', () => {
    expect(searchGifs('q')).toEqual({
      type: GET_SEARCH, 
      payload: {q: 'q'}
    })
  });

  it('test searchGifsFetched', () => {
    expect(searchGifsFetched('data', 'query')).toEqual({
      type: SEARCH_FETCHED,
      payload: {
        data: 'data',
        query: 'query'
      }
    })
  });

  it('test toggleFavorite', () => {
    expect(toggleFavorite('id', mockGif)).toEqual({
      type: TOGGLE_FAVORITE,
      payload: {
        id: 'id',
        gif: {
          url: 'url',
          original: 'original',
          id: 'id',
          title: 'title',
          favorite: false
        }
      }
    })
  });

  it ('test loadSavedFavorites', () => {
    expect(loadSavedFavorites()).toEqual({
      type: LOAD_SAVED_FAVORITES, 
      payload: null
    })
  });

  it ('test filterFavorites', () => {
    expect(filterFavorites('query')).toEqual({
      type: FILTER_FAVORITES,
      payload: {
        query: 'query'
      }
    })
  });

  it('default payload on trandingGifsFetched should be {}', () => {
    expect(trendingGifsFetched()).toEqual({
      type: TRENDING_FETCHED,
      payload: {}
    });
  });

  it('default q on searchGifs should be an empty string', () => {
    expect(searchGifs()).toEqual({
      type: GET_SEARCH,
      payload: {
        q: ''
      }
    });
  });

  it('default filterFavorites query should be an empty string', () => {
    expect(filterFavorites()).toEqual({
      type: FILTER_FAVORITES,
      payload: {
        query: ''
      }
    });
  });

})