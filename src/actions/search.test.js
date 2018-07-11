import { store } from "../store";
import searchActions from "./search";

describe("search_actions", () => {
  describe("search_input", () => {
    test("Should dispatches the correct action and payload", () => {
      store.dispatch(searchActions.creators.setSearchInput("soccer"));
      expect(store.getState()).toMatchSnapshot();
    });
  });

  describe("search_favorite", () => {
    test("Should dispatches the correct action and payload", () => {
      store.dispatch(searchActions.creators.setSearchFavorite("google"));
      expect(store.getState()).toMatchSnapshot();
    });
  });
});
