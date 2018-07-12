import favoriteGifsReducer from './favoriteGifs';
import favoriteGifsActionDef from '../actions/favoriteGifs';

describe('favoriteGifs reducer', () => {
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
    expect(favoriteGifsReducer(undefined, action)).toEqual(expectedState);
  });

  it('sets the given value for the state for FAVORITE_ADD_TO_STATE', () => {
    action = {
      type: favoriteGifsActionDef.types.FAVORITE_ADD_TO_STATE,
      payload: { gif: { id: 'dump' } },
    };
    expectedState = {
      x: { id: 'x' },
      dump: { id: 'dump' },
    };
    const sourceState = {
      x: { id: 'x' },
    };
    expect(favoriteGifsReducer(sourceState, action)).toEqual(expectedState);
  });

  it('sets the given value for the state for FAVORITE_RMEOVE_FROM_STATE', () => {
    action = {
      type: favoriteGifsActionDef.types.FAVORITE_REMOVE_FROM_STATE,
      payload: { gif: { id: 'dump' } },
    };
    const sourceState = {
      x: { id: 'x' },
      dump: { id: 'dump' },
    };
    expectedState = {
      x: { id: 'x' },
    };
    expect(favoriteGifsReducer(sourceState, action)).toEqual(expectedState);
  });

  it('sets the given value for the state for FAVORITE_HYDRATE', () => {
    action = {
      type: favoriteGifsActionDef.types.FAVORITE_HYDRATE,
      payload: { gifs: { x: { id: 'x' } } },
    };
    expectedState = {
      x: { id: 'x' },
    };
    expect(favoriteGifsReducer(undefined, action)).toEqual(expectedState);
  });
});
