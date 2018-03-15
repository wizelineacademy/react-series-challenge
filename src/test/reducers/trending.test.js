import trending, { defaultState } from '../../src/reducers/trending';
import {
  loadTrendingRequest,
  LOAD_TRENDING_REQUEST,
  loadTrendingSuccess,
  LOAD_TRENDING_SUCCESS
} from '../../src/actions/trending';

describe('trending reducer', () => {
  it('should return default state when given an unknown action', () => {
    const action = { type: 'FOO' };
    expect(trending(undefined, action)).toEqual(defaultState);
  });

  it('should return the same state when given an unknown action', () => {
    const state = {
      loading: true,
      gifs: [{ id: 1 }, { id: 2 }]
    };
    const action = { type: 'FOO' };

    expect(trending(state, action)).toEqual(state);
  });

  describe(`for ${LOAD_TRENDING_REQUEST} action`, () => {
    it('should set loading to true', () => {
      const expected = {
        ...defaultState,
        loading: true
      };

      expect(trending(defaultState, loadTrendingRequest())).toEqual(expected);
    });
  });

  describe(`for ${LOAD_TRENDING_SUCCESS} action`, () => {
    it('should set loading to false', () => {
      const payload = {
        data: []
      };
      const expected = {
        ...defaultState,
        loading: false
      };

      expect(trending(defaultState, loadTrendingSuccess(payload))).toEqual(expected);
    });

    it('should set the gifs to the payload data', () => {
      const payload = {
        data: [{ id: 1 }, { id: 2 }]
      };
      const expected = {
        ...defaultState,
        gifs: payload.data
      }

      expect(trending(defaultState, loadTrendingSuccess(payload))).toEqual(expected);
    });
  });
});
