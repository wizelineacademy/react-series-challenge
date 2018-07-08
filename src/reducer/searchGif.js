import * as actions from "../actions";

const searchGif = (state = 0, action) => {
  switch (action.type) {
    case actions.SEARCH_RESULT:
      return state;
    case actions.SEARCH_EVENT:
      return state;
    default:
      return state;
  }
}
  
export default searchGif;