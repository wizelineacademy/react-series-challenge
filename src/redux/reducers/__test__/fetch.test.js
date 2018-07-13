import actions from "./../../constants/actions";
import reducer, { initialState } from "./../fetch";

describe("fect reducer >", () => {

  const emptyState = {
    loading: false,
    word: '',
    data: {},
   };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle FETCH_START', () => {
    // This func overwrite previous one
    const data = { loading: true };
    expect(reducer({}, {
      type: actions.FETCH_START, payload: {
        data
      }
    })).toEqual(data)
  });

  it('should handle FETCH_END', () => {
    // This func overwrite previous one
    const data = { loading: false };
    expect(reducer({}, {
      type: actions.FETCH_END, payload: {
        data
      }
    })).toEqual(data)
  });

  it('should handle FETCH_DATA when add', () => {
    const oldState = { ...initialState };
    const payload = { data: { data: [1, 2, 4], meta: {} } };
    // This func overwrite previous one
    expect(reducer(oldState, {
      type: actions.FETCH_DATA,
      payload
    })).toEqual({
      ...emptyState,
      ...payload
    });
  });

  it('should handle FETCH_ERROR when remove', () => {
    const oldState = { ...initialState };
    const payload = { data: { error: 'Simulated error' } };

    expect(reducer(oldState, {
      type: actions.FETCH_ERROR,
      payload
    })).toEqual({
      ...emptyState,
      ...payload
    });
  });

  it('should handle FETCH_REQUEST when remove', () => {
    const oldState = { ...initialState };
    const payload = { word: 'justWord' };

    expect(reducer(oldState, {
      type: actions.FETCH_REQUEST,
      payload
    })).toEqual({
      ...emptyState,
      ...payload
    });
  });

});