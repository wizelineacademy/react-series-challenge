// import configureStore from "redux-mock-store";
import favoriteActions from "./favorites";

import { store } from "../store";
// const mockStore = configureStore();
// const store = mockStore();

describe("favorites_actions", () => {
  describe("filterFavorite", () => {
    test("Should dispatches the correct action and payload", () => {
      store.dispatch(favoriteActions.creators.filterFavorite("soccer"));
      //   expect(store.getState()).toMatchSnapshot();
      expect(store.getState()).toMatchSnapshot();
    });
  });

  describe("toggle_Favorite", () => {
    test("Should dispatches the correct action and payload", () => {
      store.dispatch(
        favoriteActions.creators.toggleFavorite({
          item: { id: "1yTczxnQj0LojkuXCY" }
        })
      );
      //   expect(store.getState()).toMatchSnapshot();
      expect(store.getState()).toMatchSnapshot();
    });
  });
});
