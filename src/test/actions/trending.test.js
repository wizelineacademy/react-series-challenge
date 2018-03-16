import {
  loadTrendingRequest,
  LOAD_TRENDING_REQUEST,
  loadTrendingSuccess,
  LOAD_TRENDING_SUCCESS
} from '../../actions/trending';

describe('trending action creators', () => {
  describe('loadTrendingRequest', () => {
    it(`should return action with type ${LOAD_TRENDING_REQUEST}`, () => {
      const expected = { type: LOAD_TRENDING_REQUEST };
      expect(loadTrendingRequest()).toEqual(expected);
    });
  });

  describe('loadTrendingSuccess', () => {
    it(`should return action with type ${LOAD_TRENDING_SUCCESS}`, () => {
      const expected = { type: LOAD_TRENDING_SUCCESS };
      expect(loadTrendingSuccess()).toEqual(expected);
    });

    it(`should return the response passed in the payload`, () => {
      const response = { data: [] };
      const expected = {
        type: LOAD_TRENDING_SUCCESS,
        payload: response
      };

      expect(loadTrendingSuccess(response)).toEqual(expected);
    });
  });
});
