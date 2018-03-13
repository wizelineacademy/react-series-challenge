import {FETCH_TREND, ADD_FAVORITE, DELETE_FAVORITE, FETCH_DETAILS, SEARCH_ON_WEB} from './types'

export function fetchTrend () {
  return ({
    type: FETCH_TREND
  })
}

export function addFavorite (favorite) {
  return({
    type: ADD_FAVORITE,
    favorite
  })
}

export function deleteFavorite (favorite) {
  return({
    type: DELETE_FAVORITE,
    favorite
  })
}

export function fetchDetails (gimphyId) {
  return({
    type: FETCH_DETAILS,
    gimphyId
  })
}

export function searchOnWeb(query) {
  return {
    type: SEARCH_ON_WEB,
    query
  }
}

