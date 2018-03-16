import reducers from '../../reducers';

describe('Reducer\'s index', () => {
  it('gets combiner function', () => {
    expect(typeof reducers).toBe('function');
  });
});
