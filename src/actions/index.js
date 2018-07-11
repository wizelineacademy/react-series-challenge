export const FAVORITE_TOGGLE = 'FAVORITE_TOGGLE'
export const FAVORITE_GIFS_DATA = 'FAVORITE_GIFS_DATA'
export const FAVORITE_GIFS_INIT = 'FAVORITE_GIFS_INIT'
export const FAVORITE_TOGGLE_START = 'FAVORITE_TOGGLE_START'

export const favoriteToggle = (item = {}) => ({ type: FAVORITE_TOGGLE, item })
export const favoriteGifsData = (gifs = []) => ({ type: FAVORITE_GIFS_DATA, gifs })
export const favoriteGifsInit = () => ({ type: FAVORITE_GIFS_INIT })
export const favoriteToggleStart = (item = {}) => ({ type: FAVORITE_TOGGLE_START, item })
