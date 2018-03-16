import reducers from '../../reducers';

describe('Reducer\'s index', () => {
  it('gets combiner function', () => {
    console.log(reducers);
    expect(typeof reducers).toBe('function');
  });
});
