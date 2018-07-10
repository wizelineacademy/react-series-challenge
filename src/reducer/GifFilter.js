import * as actions from "../actions";

const gif = (state = {}, action) => {
  switch (action.type) {
    case actions.FILTER_FAVORITES:
      const newObj = { ...action }
      const result = (newObj.search.favorites || []).filter((v) => {
        return v.title === action.search.param;
      });

      return result;
    default:
      return state;
  }
}

export default gif;