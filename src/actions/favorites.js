const REQUEST_TOGGLE = 'REQUEST_TOGGLE';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const requestToggle = id => ({ type: REQUEST_TOGGLE, payload: id });
const favoriteAction = payload => ({ type: TOGGLE_FAVORITE, payload });

export default {
  types: { REQUEST_TOGGLE, TOGGLE_FAVORITE },
  creators: { requestToggle, favoriteAction },
};
