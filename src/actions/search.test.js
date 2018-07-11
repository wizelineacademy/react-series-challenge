import configureStore from "redux-mock-store";
import searchActions from "./search";

const mockStore = configureStore();
const store = mockStore();

describe("search_actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("search_input", () => {
    test("Should dispatches the correct action and payload", () => {
      store.dispatch(searchActions.creators.setSearchInput("soccer"));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe("search_favorite", () => {
    test("Should dispatches the correct action and payload", () => {
      store.dispatch(searchActions.creators.setSearchFavorite("google"));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
