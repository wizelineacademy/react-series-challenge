import * as actions from "../actions";

const gif = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_TRENDING_GIF:
      return {...action.products};
    case actions.GET_TRENDING_GIF_FAILED:
      return state;
    default:
      return state;
  }
}
  
export default gif;