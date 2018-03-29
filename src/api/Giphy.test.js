import API from './Giphy';

describe('Api\'s index', () => {
  it('performs a search request', () => {
    const response = API.loadSearch('something');
    expect(response).resolves.toHaveLength(24);
  });
});