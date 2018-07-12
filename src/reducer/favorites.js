import * as actions from "../actions";

const Favorites = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_FAVORITES: {
      return action.add;
    }
    case actions.GET_FAVORITES: {
      return action.gifs;
    }
    case actions.DELETE_FAVORITES: {
      return action.id;
    }
    default:
      return state;
  }
}

export default Favorites;