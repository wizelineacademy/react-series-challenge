import trendingReducer from '../../reducers/trending';

describe('Reducers for trending', () => {

  it('reducer: GET_TRENDING_REQUESTED', () => {
    let state = { fetching: false };
    state = trendingReducer(
      state,
      { type: 'GET_TRENDING_REQUESTED' },
    );
    expect(state).toEqual({ fetching: true });
  });

  it('reducer: GET_TRENDING_COMPLETED', () => {
    let state = { fetching: false };
    state = trendingReducer(
      state,
      { type: 'GET_TRENDING_COMPLETED' },
    );
    expect(state).toEqual({ fetching: false });
  });

  it('reducer: GET_TRENDING_FAILED', () => {
    let state = { fetching: false };
    state = trendingReducer(
      state,
      { type: 'GET_TRENDING_FAILED' },
    );
    expect(state).toEqual({ fetching: false });
  });

  it('reducer: default action', () => {
    let state = { fetching: false };
    state = trendingReducer(
      state,
      { type: 'GET_SOMETHING' },
    );
    expect(state).toEqual({ fetching: false });
  });
});
