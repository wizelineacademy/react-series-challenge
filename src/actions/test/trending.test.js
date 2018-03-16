import {
  FETCH_TRENDING_GIFS, FETCH_TRENDING_GIFS_FAIL, FETCH_TRENDING_GIFS_OK, fetchTrendingGifs, fetchTrendingGifsFail,
  fetchTrendingGifsOk
} from "../trending";

const mockResponse = {};

describe('trending action', () => {
  it('should return fetching action', () => {
    expect(fetchTrendingGifs()).toEqual({
      type: FETCH_TRENDING_GIFS
    })
  });

  it('should return fetching ok action', () => {
    expect(fetchTrendingGifsOk(mockResponse)).toEqual({
      type: FETCH_TRENDING_GIFS_OK,
      payload: mockResponse
    })
  });

  it('should return fetching fail action', () => {
    expect(fetchTrendingGifsFail()).toEqual({
      type: FETCH_TRENDING_GIFS_FAIL
    })
  });
});
