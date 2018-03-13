export const FAVORITE_CLICK = 'FAVORITE/CLICK'

export const favoriteClick = id => ({
  type: FAVORITE_CLICK,
  payload: {
    id
  }
})
