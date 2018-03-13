import reducer from '../../src/reducers/giphy';
import actions from '../../src/actions/giphy';

const mockGifsData = [
  {
    title: 'a'
  },
  {
    title: 'b'
  },
  {
    title: 'c'
  },
]

describe('giphy reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      data: [],
      searchTerm: '',
      pagination: {},
      filteredFavorites: [],
    };
  });


  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_FAVORITE_GIFS_COMPLETED', () => {
    const payload = initialState;
    payload.data = [{}];
    const getTrendingGifs = actions.creators.getFavoriteGifsCompleted({ data: payload.data })
    expect(reducer(undefined, getTrendingGifs)).toEqual(payload);
  });

  it('should handle FILTER_FAVORITES', () => {
    initialState.data = mockGifsData;
    const payload = initialState;
    const searchTerm = 'a';
    payload.filteredFavorites = [{ title: 'a' }];
    const filterFavorites = actions.creators.filterFavorites({ searchTerm });
    expect(reducer(initialState, filterFavorites)).toEqual(payload);
  });

  it('should handle GET_GIF_COMPLETED', () => {
    const payload = initialState;
    payload.data = [{}];
    payload.pagination = { random: 'object', 'created': 'now' };
    const getGif = actions.creators.getGifCompleted({ data: {}, pagination: payload.pagination })
    expect(reducer(undefined, getGif)).toEqual(payload);
  });

  it('should handle SEARCH_GIFS_REQUESTED', () => {
    const payload = initialState;
    payload.searchTerm = 'hello';
    payload.filterFavorites = [];
    const searchGif = actions.creators.searchGifsRequested({ searchTerm: payload.searchTerm });
    expect(reducer(initialState, searchGif)).toEqual(payload);
  });

  it('should handle GET_TRENDING_GIFS_COMPLETED', () => {
    const payload = initialState;
    payload.pagination = { random: 'object', 'created': 'now' };
    const getTrendingCompleted = actions.creators.getTrendingGifsCompleted(payload);
    expect(reducer(undefined, getTrendingCompleted)).toEqual(payload);
  });

  it('should handle SEARCH_GIFS_COMPLETED', () => {
    const payload = initialState;
    payload.pagination = { random: 'object', 'created': 'now' };
    const searchGifCompleted = actions.creators.searchGifsCompleted(payload);
    expect(reducer(undefined, searchGifCompleted)).toEqual(payload);
  });
});