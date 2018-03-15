const REQUEST_TOGGLE = 'REQUEST_TOGGLE';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const FETCH_FAVORITES = 'FETCH_FAVORITES';

const requestToggle = payload => ({ type: REQUEST_TOGGLE, payload });
const favoriteAction = payload => ({ type: TOGGLE_FAVORITE, payload });
const fetchFavorites = () => ({ type: FETCH_FAVORITES });

export default {
  types: { REQUEST_TOGGLE, TOGGLE_FAVORITE, FETCH_FAVORITES },
  creators: { requestToggle, favoriteAction, fetchFavorites },
};
