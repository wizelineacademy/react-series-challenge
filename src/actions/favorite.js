export const FAVORITE_CLICK = 'FAVORITE/CLICK'
export const FAVORITE_FETCH_INITIAL_GIFS = 'FAVORITE/FETCH_INITIAL_GIFS'
export const FAVORITE_FETCH_INITIAL_GIFS_SUCCESS = 'FAVORITE/FETCH_INITIAL_GIFS_SUCCESS'
export const FAVORITE_FETCH_INITIAL_GIFS_FAILED = 'FAVORITE/FETCH_INITIAL_GIFS_FAILED'

export const favoriteClick = id => ({
  type: FAVORITE_CLICK,
  payload: {
    id
  }
})

export const favoriteFetchInitialGifs = () => ({
  type: FAVORITE_FETCH_INITIAL_GIFS
})

export const favoriteFetchInitialGifsSuccess = giphies => ({
  type: FAVORITE_FETCH_INITIAL_GIFS_SUCCESS,
  payload: giphies
})

export const favoriteFetchInitialGifsFailed = () => ({
  type: FAVORITE_FETCH_INITIAL_GIFS_FAILED
})
