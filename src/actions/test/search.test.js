import {
  FETCH_SEARCH_GIFS, FETCH_SEARCH_GIFS_FAIL, FETCH_SEARCH_GIFS_OK, fetchSearchGifs, fetchSearchGifsFail,
  fetchSearchGifsOk
} from "../search";

const mockResponse = {};

describe('trending action', () => {
  it('should return fetching action', () => {
    expect(fetchSearchGifs()).toEqual({
      type: FETCH_SEARCH_GIFS
    })
  });

  it('should return fetching ok action', () => {
    expect(fetchSearchGifsOk(mockResponse)).toEqual({
      type: FETCH_SEARCH_GIFS_OK,
      payload: mockResponse
    })
  });

  it('should return fetching fail action', () => {
    expect(fetchSearchGifsFail()).toEqual({
      type: FETCH_SEARCH_GIFS_FAIL
    })
  });
});
