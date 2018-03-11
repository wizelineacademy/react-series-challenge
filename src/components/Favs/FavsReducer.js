import actions from "./FavsActions";
import { db } from "../../utils";

const initialState = {
  favs: db.get("favs") || []
};

const favsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actions.types.TOGGLE_FAVORITE: {
      const { payload: gif } = action;
      const favs = gif.favorite
        ? state.favs.filter(fav => fav.id !== gif.id)
        : [...state.favs, { ...gif, favorite: true }];

      db.set("favs", favs);
      return { favs };
    }

    default:
      return state;
  }
};

export default favsReducer;
