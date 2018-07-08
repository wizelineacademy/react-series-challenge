import * as actions from "../actions";

const searchGif = (state = 0, action) => {
  switch (action.type) {
    case actions.SEARCH_GIF:
      debugger;
      return state;
    default:
      return state;
  }
}
  
export default searchGif;