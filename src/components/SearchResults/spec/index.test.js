import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import SearchResults from "../";

const mockStore = configureStore();

const initialState = {
  searchReducer: {
    loaded: false,
    gifs: [
      {
        id: 1,
        images: {
          original: { width: 400, height: 400, url: "http://original" },
          fixed_width: { width: 300, height: 300, url: "http://fixed" }
        }
      }
    ]
  }
};

describe("<SearchResults />", () => {
  it("renders properly", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    ReactDOM.createPortal = node => node;
    const component = renderer.create(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a message when empty", () => {
    const init = Object.assign(initialState);
    init.searchReducer.gifs = [];
    init.searchReducer.loaded = true;
    const store = mockStore(init);
    ReactDOM.createPortal = node => node;
    const component = renderer.create(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
