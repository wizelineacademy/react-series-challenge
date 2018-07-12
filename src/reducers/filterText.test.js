import filterTextReducer from './filterText';
import filterTextActionDef from '../actions/filterText';

describe('filterText reducer', () => {
  let expectedState = null;
  let action = null;

  beforeEach(() => {
    expectedState = {
      trendingFilter: '',
    };
    action = {
      type: '',
      payload: {},
    };
  });

  it('sets a default value for the state for unknow action and unknow action', () => {
    expect(filterTextReducer(undefined, action)).toEqual(expectedState);
  });

  it('sets the given value for the state for FILTER_TRENDING_TEXT_UPDATE action', () => {
    action = {
      type: filterTextActionDef.types.FILTER_TRENDING_TEXT_UPDATE,
      payload: { text: 'hello' },
    };
    expectedState = {
      trendingFilter: 'hello',
    };
    expect(filterTextReducer({}, action)).toEqual(expectedState);
  });
});
