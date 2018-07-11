import actions from '../actions';

describe('Home actions', () => {
  it('home creators', () => {
    expect(actions.creators.loadTrendingGifs()).toMatchSnapshot();
    expect(actions.creators.setLoading(true)).toMatchSnapshot();
    expect(actions.creators.setGifs([])).toMatchSnapshot();
    expect(actions.creators.searchGifs()).toMatchSnapshot();
    expect(actions.creators.setSearchTerm('dogo')).toMatchSnapshot();
  });
});
