import * as actions from '../actions';

describe('Actions - Home', () => {
  it('Fetch Trending Pending', () => {
    expect(actions.fetchTrendingGifs()).toMatchSnapshot();
  });

  it('Fetch Trending Success', () => {
    expect(actions.fetchTrendingGifsSuccess({})).toMatchSnapshot();
  });

  it('Fetch Trending Error', () => {
    expect(actions.fetchTrendingGifsError('Message')).toMatchSnapshot();
  });
});
