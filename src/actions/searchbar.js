export const SEARCH_BAR_CHANGE = 'SEARCH_BAR/CHANGE'

export const changeSearchBar = value => ({
  type: SEARCH_BAR_CHANGE,
  payload: {
    value
  }
})
