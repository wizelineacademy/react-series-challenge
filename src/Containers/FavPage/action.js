export const ADD_FAV = 'ADD_FAV';
export const WITHDRAW_FAV = 'WITHDRAW_FAV';

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
