import {
  searchGifsRequest,
  SEARCH_GIFS_REQUEST,
  searchGifsSuccess,
  SEARCH_GIFS_SUCCESS,
  searchGifsChangeQuery,
  SEARCH_GIFS_CHANGE_QUERY
} from '../../src/actions/search';

describe('search action creators', () => {
  describe('searchGifsRequest', () => {
    it(`should return action with type ${SEARCH_GIFS_REQUEST}`, () => {
      const expected = { type: SEARCH_GIFS_REQUEST };
      expect(searchGifsRequest()).toEqual(expected);
    });
  });

  describe('searchGifsSuccess', () => {
    it(`should return action with type ${SEARCH_GIFS_SUCCESS}`, () => {
      const expected = { type: SEARCH_GIFS_SUCCESS };
      expect(searchGifsSuccess()).toEqual(expected);
    });

    it(`should return the response passed in the payload`, () => {
      const response = { data: [] };
      const expected = {
        type: SEARCH_GIFS_SUCCESS,
        payload: response
      };

      expect(searchGifsSuccess(response)).toEqual(expected);
    });
  });

  describe('searchGifsChangeQuery', () => {
    it (`should return action with type ${SEARCH_GIFS_CHANGE_QUERY}`, () => {
      const expected = { type: SEARCH_GIFS_CHANGE_QUERY };
      expect(searchGifsChangeQuery()).toEqual(expected);
    });

    it(`should return the query passed in the payload`, () => {
      const query = 'Some Query';
      const expected = {
        type: SEARCH_GIFS_SUCCESS,
        payload: query
      };

      expect(searchGifsSuccess(query)).toEqual(expected);
    });
  });
});
