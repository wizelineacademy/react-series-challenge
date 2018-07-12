import trending from 'actions/trending'

let { creators, types } = trending

describe('Trending types and creators', () => {
  it('should create an action to get trending gifs', () => {
    const payload = {}
    const expectedAction = {
      type: types.TRENDING_GIFS_GET,
      payload
    }
    expect(creators.getTrendingGifs(payload)).toEqual(expectedAction)
  });

  it('should create an action to get fetched trending gifs', () => {
    const payload = {}
    const expectedAction = {
      type: types.TRENDING_GIFS_FETCHED,
      payload
    }
    expect(creators.fetchedTrendingGifs(payload)).toEqual(expectedAction)
  });
})