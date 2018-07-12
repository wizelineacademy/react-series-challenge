import { ACTION_SET_TO_FAV, FAVORITES, ACTION_FAV_DELETE } from "../actions";

export default function(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case ACTION_SET_TO_FAV:
      const newState = { ...state.FAVORITES };
      newState[payload.id] = { ...payload };

      return {
        ...state,
        [FAVORITES]: { ...newState },
        status: "sending"
      };
    case ACTION_FAV_DELETE:
      const newFavState = { ...state.FAVORITES };
      delete newFavState[payload.id];

      return {
        ...state,
        [FAVORITES]: { ...newFavState },
        status: "sending"
      };
    default:
      return state;
  }
}
