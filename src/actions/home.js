export const HOME_FETCH_INITIAL_GIPHS = 'HOME/FETCH_INITIAL_GIPHS'
export const HOME_FETCH_INITIAL_GIPHS_SUCESS = 'HOME/FETCH_INITIAL_GIPHS_SUCESS'
export const HOME_FETCH_INITIAL_GIPHS_FAILED = 'HOME/FETCH_INITIAL_GIPHS_SUCESS'

export const homeFetchInitialGifs = () => ({
  type: HOME_FETCH_INITIAL_GIPHS
})

export const homeFetchInitialGifsSuccess = (giphies) => ({
  type: HOME_FETCH_INITIAL_GIPHS_SUCESS,
  payload: giphies
})

export const homeFetchInitialGifsFailed = () => ({
  type: HOME_FETCH_INITIAL_GIPHS_FAILED
})
