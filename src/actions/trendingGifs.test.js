import trendingGifs from './trendingGifs';

describe('trendingGifs creators', () => {
  const {
    TRENDING_FETCH,
    TRENDING_GET,
    TRENDING_SEARCH,
  } = trendingGifs.types;
  const {
    fetchTrending,
    getTrending,
    searchTrending,
  } = trendingGifs.creators;

  let param = null;
  let expectedAction = null;

  beforeEach(() => {
    param = {
      payload: { foo: '' },
    };
    expectedAction = {
      type: '',
    };
  });

  it('exposes a correct fetchTrending action creator', () => {
    expectedAction.type = TRENDING_FETCH;
    expect(fetchTrending()).toEqual(expectedAction);
  });

  it('exposes a correct getTrending action creator', () => {
    expectedAction.type = TRENDING_GET;
    expectedAction.payload = { foo: '' };
    expect(getTrending(param)).toEqual(expectedAction);
  });

  it('exposes a correct searchTrending action creator', () => {
    expectedAction.type = TRENDING_SEARCH;
    expectedAction.payload = { foo: '' };
    expect(searchTrending(param)).toEqual(expectedAction);
  });
});
