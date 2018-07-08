import * as actions from "../actions";

const gif = (state = 0, action) => {
  switch (action.type) {
    case actions.GET_TRENDING_GIF:
      return state;
    case actions.GET_TRENDING_GIF_FAILED:
      return state;
    default:
      return state;
  }
}
  
export default gif;