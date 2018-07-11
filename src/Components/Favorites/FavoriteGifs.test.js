import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import FavoriteGifs from "./FavoriteGifs";

describe("FavoriteGifs test", () => {
  const initialState = {
    search: {
      searchInput: "",
      searchFavorite: ""
    },
    favorites: {
      items: {},
      filtered: null
    }
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    console.log(store);
    wrapper = mount(shallow(<FavoriteGifs store={store} />).get(0));
  });

  it("should render component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
