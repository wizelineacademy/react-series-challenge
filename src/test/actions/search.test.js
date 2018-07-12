import search from 'actions/search'

let { creators, types } = search

describe('Search types and creators', () => {
  it('should create an action to get search gifs', () => {
    const payload = {}
    const expectedAction = {
      type: types.SEARCH_GIFS_GET,
      payload
    }
    expect(creators.getSearchGifs(payload)).toEqual(expectedAction)
  });

  it('should create an action to get fetched search gifs', () => {
    const payload = {}
    const expectedAction = {
      type: types.SEARCH_GIFS_FETCHED,
      payload
    }
    expect(creators.fetchedSearchGifs(payload)).toEqual(expectedAction)
  });
})