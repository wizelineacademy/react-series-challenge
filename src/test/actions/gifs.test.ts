import * as Actions from '../../actions/gifs'
import * as GIFS from '../GIFS.json'

describe('actions > create an action to', () => {

  it('filter the favorites', () => {
    const payload = 'dragon';
    const expectedAction = {
      type: Actions.FILTER_FAVS,
      payload
    }
    expect(Actions.filter_favs(payload))
        .toEqual(expectedAction)
  })

  it('toggle as favorite a GIF', () => {
    const payload = GIFS[0];
    const expectedAction = {
      type: Actions.TOGGLE_FAVORITE,
      payload
    }
    expect(Actions.toggle_favorite(payload))
        .toEqual(expectedAction)
  })

  it('search in the trending GIFS', () => {
    const payload = 'All might';
    const expectedAction = {
      type: Actions.SEARCH_TRENDING,
      payload
    }
    expect(Actions.search_trending(payload))
        .toEqual(expectedAction)
  })

  describe('fetch gifs from Trending API', () => {

      it('starts fetching', () => {
        const expectedAction = { type: Actions.FETCH_TRENDING }
        expect(Actions.fetch_gifs())
            .toEqual(expectedAction)
      })

      it('notify when fetch is done', () => {
        const expectedAction = { type: Actions.FETCHED_TRENDING }
        expect(Actions.fetched_gifs())
            .toEqual(expectedAction)
      })
  });
})
