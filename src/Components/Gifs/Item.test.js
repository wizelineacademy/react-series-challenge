import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Item from "./Item";

describe("Item test", () => {
  const initialState = {
    items: {},
    filtered: null
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Item store={store} />);
  });

  it("should render component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
