import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import ListGifs from "./ListGifs";

describe("ListGifs test", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    console.log(store);
    wrapper = shallow(<ListGifs store={store} />);
  });

  it("should render component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
