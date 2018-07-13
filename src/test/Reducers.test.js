import reducer from '../reducers';
import initialState from '../reducers/initialState';
import actions from '../actions';

import { mockGif, mockResponseData } from "./mocks";

const { 
  TRENDING_FETCHED, 
  SEARCH_FETCHED, 
  TOGGLE_FAVORITE,
  LOAD_SAVED_FAVORITES,
  FILTER_FAVORITES
} = actions.types;

describe('Reducers', () => {

  it('default state should be initialState', () => {
    expect(reducer(undefined, {
      type: 'SOME_TYPE', 
      payload: null
    })).toEqual(initialState);
  })

  it('applying TRENDING_FETCHED action should match snapshot', () => {
    let state = {...initialState};
    state.favorites = [mockGif];
    const action = {
      type: TRENDING_FETCHED,
      payload: mockResponseData
    };
    expect(reducer(state, action)).toMatchSnapshot();
  });

  it('applying SEARCH_FETCHED action should match snapshot', () => {
    let state = {...initialState};
    state.favorites = [mockGif];
    const action = {
      type: SEARCH_FETCHED,
      payload: mockResponseData
    };
    expect(reducer(state, action)).toMatchSnapshot();
  });

  it('applying TOGGLE_FAVORITE action should match snapshot (when the gif is NOT already marked as favorite', () => {
    const action = {
      type: TOGGLE_FAVORITE,
      payload: {
        id: 'id',
        gif: mockGif
      }
    };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('applying TOGGLE_FAVORITE action should match snapshot (when the gif IS already marked as favorite', () => {
    let state = {...initialState};
    state.favorites = [mockGif];
    const action = {
      type: TOGGLE_FAVORITE,
      payload: {
        id: 'id',
        gif: mockGif
      }
    };
    expect(reducer(state, action)).toMatchSnapshot();
  });

  it('applying TOGGLE_FAVORITE action should match snapshot (with trending)', () => {
    let state = {...initialState};
    state.trendingGifs = [mockResponseData.data];
    const action = {
      type: TOGGLE_FAVORITE,
      payload: {
        id: 'id',
        gif: mockGif
      }
    };
    expect(reducer(state, action)).toMatchSnapshot();
  });

  it('applying LOAD_SAVED_FAVORITES action should match snapshot', () => {
    const action = {
      type: LOAD_SAVED_FAVORITES,
      payload: null
    };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('applying FILTER_FAVORITES action should match snapshot', () => {
    const action = {
      type: FILTER_FAVORITES,
      payload: {
        query: 'query'
      }
    };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

})