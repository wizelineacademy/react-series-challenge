import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import SearchInput from "./SearchInput";

describe("SearchInput test", () => {
  const initialState = {
    search: {
      searchInput: "",
      searchFavorite: ""
    }
  };
  const mockStore = configureStore();
  let store, wrapper, input;

  beforeEach(() => {
    store = mockStore(initialState);
    console.log(store);
    wrapper = mount(shallow(<SearchInput store={store} />).get(0));
    input = wrapper.find("input").first();
    console.log(input);
  });

  it("should render component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("simulate change", () => {
    input.simulate("change", {
      target: { value: "Hola" }
    });
    console.log(store.getState());
    expect(store.getState().search.searchInput).toEqual("");
  });

  it("simulate change", () => {
    input.simulate("keyup", {
      target: { value: "Hola" }
    });
    console.log(store.getState());
    expect(store.getState().search.searchInput).toEqual("");
  });
});
