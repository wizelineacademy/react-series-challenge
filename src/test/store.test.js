import reducers from '../store/reducers'
import gifsData from './data/trendingMockData'
import singleGif from './data/gifTestData'

const state = {
  trendingGifs: [],
  favoriteGifs: [],
  error: '',
  loading: false,
  singleGif: null
}

describe('Store', () => {
  it('sets loading true and false', () => {
    const newState = reducers(null, { type: 'LOADING_START' })
    expect(newState.loading).toBe(true);
    const finishedLoading = reducers(state, { type: 'LOADING_END' })
    expect(finishedLoading.loading).toBe(false);
  });

  it('set trending gifs', () => {
    const newState = reducers(state, {
      type: 'FETCH_SUCCEEDED',
      trendingGifs: { data: gifsData }
    })
    expect(newState.trendingGifs).toBe(gifsData);
  });

  it('sets error message', () => {
    const newState = reducers(state, {
      type: 'FETCH_FAILED',
      payload: { message: 'error' }
    })
    expect(newState.error).toBe('error');
  })

  it('sets single gif', () => {
    const newState = reducers(state, {
      type: 'FETCHED_SINGLE',
      singleGif: { data: singleGif }
    })
    expect(newState.singleGif).toBe(singleGif);
  })

  it('sets search results', () => {
    const newState = reducers(state, {
      type: 'FETCHED_SEARCH',
      searchGifs: { data: gifsData }
    })
    expect(newState.trendingGifs).toBe(gifsData);
  })

  beforeEach(() => {
    localStorage.clear();
  })

  it('sets and fetches favorites from storage', () => {
    const newState = reducers(state, {
      type: 'FETCH_FAVORITES',
    })
    // fetching from empty local storage should set it empty
    expect(newState.favoriteGifs).toEqual([])

    const withFavorite = reducers(newState, {
      type: 'SAVE_FAVORITE',
      gifData: singleGif
    })
    const filteredGif = {
      id: singleGif.id,
      slug: singleGif.slug,
      images: {
        fixed_width: singleGif.images.fixed_width
      }
    }
    expect(withFavorite.favoriteGifs).toEqual([filteredGif])
    const fetchSaved = reducers(withFavorite, {
      type: 'FETCH_FAVORITES',
    })
    // fetching again should not change the object

    const noEffect = reducers(fetchSaved, {
      type: 'REMOVE_FAVORITE',
      gifId: 'unexisting'
    })
    expect(noEffect.favoriteGifs).toEqual([filteredGif])

    const emptyAgain = reducers(noEffect, {
      type: 'REMOVE_FAVORITE',
      gifId: singleGif.id
    })
    expect(emptyAgain.favoriteGifs).toEqual([])

  })

  it('doesn\'t change the state with random action types', () => {
    const newState = reducers(state, {
      type: 'this_is_random_type'
    })
    expect(newState).toBe(state);
  })
})
