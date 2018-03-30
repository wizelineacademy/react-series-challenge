import searchReducer from '../../reducers/search';

describe('Reducers for search', () => {

  it('reducer: GET_SEARCH_REQUESTED', () => {
    let state = { searchFetching: false };
    state = searchReducer(
      state,
      { type: 'GET_SEARCH_REQUESTED' },
    );
    expect(state).toEqual({ searchFetching: true });
  });

  it('reducer: GET_SEARCH_COMPLETED', () => {
    let state = { searchFetching: false };
    state = searchReducer(
      state,
      { type: 'GET_SEARCH_COMPLETED' },
    );
    expect(state).toEqual({ searchFetching: false });
  });

  it('reducer: GET_SEARCH_FAILED', () => {
    let state = { searchFetching: false };
    state = searchReducer(
      state,
      { type: 'GET_SEARCH_FAILED' },
    );
    expect(state).toEqual({ searchFetching: false });
  });

  it('reducer: default action', () => {
    let state = { searchFetching: false };
    state = searchReducer(
      state,
      { type: 'GET_SOMETHING' },
    );
    expect(state).toEqual({ searchFetching: false });
  });
});
