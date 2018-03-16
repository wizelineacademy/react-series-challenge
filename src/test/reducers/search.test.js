import search from '../../reducers/search';
import {
  updateQuery,
  clearQuery
} from '../../actions';

let state;

describe('Reducer: search', () => {
  beforeEach(() => {
    state = { query: 'some query' }
  });

  it('returns default status', () => {
    const reduced = search(undefined, { type: 'none' });
    expect(reduced).toEqual({ query: '' });
  })

  it('updates query', () => {
    const newQuery = 'another query';
    const action = updateQuery(newQuery);
    const reduced = search(state, action);
    expect(reduced.query).toBe(newQuery);
  });

  it('clears query', () => {
    const action = clearQuery();
    const reduced = search(state, action);
    expect(reduced.query).toBe('');
  });
});
