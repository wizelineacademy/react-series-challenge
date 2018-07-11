export const FAVORITE_TOGGLE = 'FAVORITE_TOGGLE'
export const FETCH_FAVORITE_GIFS = 'FETCH_FAVORITE_GIFS'

export const favoriteToggle = (item = {}) => ({ type: FAVORITE_TOGGLE, item })
export const fetchFavoriteGifs = (gifs = []) => ({ type: FETCH_FAVORITE_GIFS, gifs })
