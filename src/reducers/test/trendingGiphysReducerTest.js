import trendingGiphysReducer from '../trendingGiphysReducer';
import { FETCH_TRENDING_GIPHYS_SUCCESS } from '../../actions/action_types';

const DEFAULT_STATE = {
  giphys: [],
} ;

describe('team reducer', () => {
  it('should return the initial state', () => {
    expect(trendingGiphysReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should handle FETCH_FAVORITE_GIPHYS_SUCCESS', () => {
    const action = {
      type: FETCH_TRENDING_GIPHYS_SUCCESS,
      payload: {
        data: [{
          id: 'testId'
        }]
      }
    }
    expect(trendingGiphysReducer(DEFAULT_STATE, action)).toEqual({
      giphys: [{id: 'testId'}],
    });
  });
});