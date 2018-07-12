export const FAVORITE_TOGGLE = 'FAVORITE_TOGGLE'
export const FAVORITE_GIFS_DATA = 'FAVORITE_GIFS_DATA'
export const FAVORITE_GIFS_INIT = 'FAVORITE_GIFS_INIT'
export const FAVORITE_TOGGLE_START = 'FAVORITE_TOGGLE_START'

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'

export const favoriteToggle = (item = {}) => ({ type: FAVORITE_TOGGLE, item })
export const favoriteGifsData = (gifs = []) => ({ type: FAVORITE_GIFS_DATA, gifs })
export const favoriteGifsInit = () => ({ type: FAVORITE_GIFS_INIT })
export const favoriteToggleStart = (item = {}) => ({ type: FAVORITE_TOGGLE_START, item })

export const fetchDataSuccess = (gifs = []) => ({ type: FETCH_DATA_SUCCESS, gifs })
export const fetchDataRequest = (query) => ({ type: FETCH_DATA_REQUEST, query })