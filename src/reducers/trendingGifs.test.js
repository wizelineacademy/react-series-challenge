import trendingGifsReducer from './trendingGifs';
import trendingGifsActionDef from '../actions/trendingGifs';

describe('trendingGifs reducer', () => {
  let expectedState = null;
  let action = null;

  beforeEach(() => {
    expectedState = {};
    action = {
      type: '',
      payload: {},
    };
  });

  it('sets a default value for the state for unknow action and unknow action', () => {
    expect(trendingGifsReducer(undefined, action)).toEqual(expectedState);
  });

  it('sets the given value for the state for TRENDING_GET', () => {
    action = {
      type: trendingGifsActionDef.types.TRENDING_GET,
      payload: { gifs: { x: { id: 'x' } } },
    };
    expectedState = {
      x: { id: 'x' },
    };
    expect(trendingGifsReducer({}, action)).toEqual(expectedState);
  });
});
