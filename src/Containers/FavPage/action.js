export const QUERY_FAV = 'QUERY_FAV';
export const QUERY_FAV_SUCCESS = 'QUERY_FAV_SUCCESS';
export const QUERY_FAV_ERROR = 'QUERY_FAV_ERROR';
export const ADD_FAV = 'ADD_FAV';
export const WITHDRAW_FAV = 'WITHDRAW_FAV';

export function queryFav(param) {
  return {
    type: QUERY_FAV,
    param
  };
}

export function queryFavSuccess(data) {
  return {
    type: QUERY_FAV_SUCCESS,
    data
  };
}

export function queryFavError(error) {
  return {
    type: QUERY_FAV_ERROR,
    error
  };
}

export function addFav(params) {
  return {
    type: ADD_FAV,
    params
  };
}

export function withdrawFav(id) {
  return {
    type: WITHDRAW_FAV,
    id
  };
}
