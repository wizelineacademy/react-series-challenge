import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import Details from "../";

const mockStore = configureStore();

const initialState = {
  detailsReducer: {
    gif: {
      id: 1,
      images: {
        original: { width: 400, height: 400, url: "http://original" },
        fixed_width: { width: 300, height: 300, url: "http://fixed" }
      },
      title: "hello",
      username: "self",
      url: "http://dummy"
    },
    loaded: true
  },
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

describe("<Details />", () => {
  it("renders properly", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    const props = { match: { params: { id: 1 } }, gifRequested() {} };
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Details {...props} />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the loader", () => {
    const init = Object.assign(initialState);
    init.detailsReducer.loaded = false;
    const store = mockStore(init);
    const props = { match: { params: { id: 1 } }, gifRequested() {} };
    ReactDOM.createPortal = node => node;
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Details {...props} />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
