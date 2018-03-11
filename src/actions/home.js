export const HOME_FETCH_INITIAL_GIPHS = 'HOME/FETCH_INITIAL_GIPHS'
export const HOME_FETCH_INITIAL_GIPHS_SUCCESS = 'HOME/FETCH_INITIAL_GIPHS_SUCCESS'
export const HOME_FETCH_INITIAL_GIPHS_FAILED = 'HOME/FETCH_INITIAL_GIPHS_FAILED'
export const HOME_FETCH_SEARCH_GIPHS = 'HOME/FETCH_SEARCH_GIPHS'
export const HOME_FETCH_SEARCH_GIPHS_SUCCESS = 'HOME/FETCH_SEARCH_GIPHS_SUCCESS'
export const HOME_FETCH_SEARCH_GIPHS_FAILED = 'HOME/FETCH_SEARCH_GIPHS_FAILED'

export const homeFetchInitialGifs = () => ({
  type: HOME_FETCH_INITIAL_GIPHS
})

export const homeFetchInitialGifsSuccess = giphies => ({
  type: HOME_FETCH_INITIAL_GIPHS_SUCCESS,
  payload: giphies
})

export const homeFetchInitialGifsFailed = () => ({
  type: HOME_FETCH_INITIAL_GIPHS_FAILED
})

export const homeFetchSearchGifs = query => ({
  type: HOME_FETCH_SEARCH_GIPHS,
  payload: {
    query
  }
})

export const homeFetchSearchGifsSuccess = giphies => ({
  type: HOME_FETCH_INITIAL_GIPHS_SUCCESS,
  payload: giphies
})

export const homeFetchSearchFailed = () => ({
  type: HOME_FETCH_SEARCH_GIPHS_FAILED
})
