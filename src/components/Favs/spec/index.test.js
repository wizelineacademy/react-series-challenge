import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import Favs from "../";

const mockStore = configureStore();

const initialState = {
  favsReducer: {
    favs: [
      {
        id: 1,
        images: {
          original: { width: 400, height: 400, url: "http://original" },
          fixed_width: { width: 300, height: 300, url: "http://fixed" }
        }
      }
    ]
  },
  imageLoaderReducer: {
    loaded: { 1: true }
  }
};

describe("<Favs />", () => {
  it("renders properly", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    ReactDOM.createPortal = node => node;
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Favs />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the empty message", () => {
    const init = Object.assign(initialState);
    init.favsReducer.favs = [];
    const store = mockStore(init);
    ReactDOM.createPortal = node => node;
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Favs />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
