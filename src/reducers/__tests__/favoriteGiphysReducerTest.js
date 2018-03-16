import favoriteGiphysReducer from '../favoriteGiphysReducer';
import { TOGGLE_FAVORITE_GIPHY, FETCH_FAVORITE_GIPHYS_SUCCESS, UPDATE_FAVORITES_FILTER } from '../../actions/action_types';

const DEFAULT_STATE = {
  list: [],
  giphys: [],
  filter: ''
} ;

describe('team reducer', () => {
  it('should return the initial state', () => {
    expect(favoriteGiphysReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should handle TOGGLE_FAVORITE_GIPHY by adding id when it doesnt exist', () => {
    const action = {
      type: TOGGLE_FAVORITE_GIPHY,
      payload: 'giphyId'
    }
    expect(favoriteGiphysReducer(DEFAULT_STATE, action)).toEqual({
      list: ['giphyId'],
      giphys: [],
      filter: ''
    });
  });

  it('should handle TOGGLE_FAVORITE_GIPHY by deleting id when it does exist', () => {
    const state = {
      list: ['giphyId'],
      giphys: [],
      filter: ''
    };

    const action = {
      type: TOGGLE_FAVORITE_GIPHY,
      payload: 'giphyId'
    }

    expect(favoriteGiphysReducer(state, action)).toEqual({
      list: [],
      giphys: [],
      filter: ''
    });
  });

  it('should handle FETCH_FAVORITE_GIPHYS_SUCCESS', () => {
    const action = {
      type: FETCH_FAVORITE_GIPHYS_SUCCESS,
      payload: {
        data: [{
          id: 'testId'
        }]
      }
    }
    expect(favoriteGiphysReducer(DEFAULT_STATE, action)).toEqual({
      list: [],
      giphys: [{id: 'testId'}],
      filter: ''
    });
  });

  it('should handle UPDATE_FAVORITES_FILTER', () => {
    const action = {
      type: UPDATE_FAVORITES_FILTER,
      payload: 'testFilter'
    }
    expect(favoriteGiphysReducer(DEFAULT_STATE, action)).toEqual({
      list: [],
      giphys: [],
      filter: 'testFilter'
    });
  });
});
