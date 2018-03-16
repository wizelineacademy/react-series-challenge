import { getSearch } from '../../api';

describe('Api\'s index', () => {
  it('performs a search request', () => {
    const res = getSearch('something');
    expect(res).resolves.toHaveLength(25);
  });
});
