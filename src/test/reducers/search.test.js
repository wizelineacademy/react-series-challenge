import search, { defaultState } from '../../src/reducers/search';
import {
  searchGifsRequest,
  searchGifsSuccess,
  searchGifsChangeQuery,
  SEARCH_GIFS_CHANGE_QUERY
} from '../../src/actions/search';

describe('search reducer', () => {
  it('should return default state when given an unknown action', () => {
    const action = { type: 'FOO' };
    expect(search(undefined, action)).toEqual(defaultState);
  });

  it('should return the same state when given an unknown action', () => {
    const state = {
      query: 'foo bar',
      searching: false,
      gifs: [{ id: 1 }, { id: 2 }]
    };
    const action = { type: 'FOO' };

    expect(search(state, action)).toEqual(state);
  });

  it('should have searching set to true when search starts', () => {
    const expected = {
      ...defaultState,
      searching: true
    };

    expect(search(defaultState, searchGifsRequest())).toEqual(expected);
  });

  it('should have searching set to false and the response gifs', () => {
    const response = {
      data: [{ id: 1 }, { id: 2 }]
    };
    const expected = {
      ...defaultState,
      searching: false,
      gifs: response.data
    };

    expect(search(defaultState, searchGifsSuccess(response))).toEqual(expected);
  });

  describe(`for ${SEARCH_GIFS_CHANGE_QUERY} action`, () => {
    it('should return the current state but update the query field with the payload', () => {
      const query = 'foo query';
      const state = {
        ...defaultState,
        gifs: [{ id: 1 }, { id: 2 }]
      };
      const expected = {
        ...defaultState,
        gifs: [{ id: 1 }, { id: 2 }],
        query
      };

      expect(search(state, searchGifsChangeQuery(query))).toEqual(expected);
    });
  });
});
