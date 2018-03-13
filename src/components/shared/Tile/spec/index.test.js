import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import "jest-styled-components";
import Tile from "../";

const mockStore = configureStore();

const shape = {
  gif: {
    id: 1,
    images: {
      original: { width: 400, height: 400, url: "http://original" },
      fixed_width: { width: 300, height: 300, url: "http://fixed" }
    }
  },
  original: true,
  color: "red"
};

const initialState = {
  favsReducer: { favs: [] },
  imageLoaderReducer: { loaded: {} }
};

describe("<Tile />", () => {
  it("renders properly", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    const props = Object.assign(shape);
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Tile {...props} />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the heart mark", () => {
    const init = Object.assign(initialState);
    init.imageLoaderReducer.loaded = { 1: true };
    const store = mockStore(init);
    const props = Object.assign(shape);
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Tile {...props} />
        </Router>
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render the original image", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    const props = Object.assign(shape);
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Tile {...props} />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render the small image", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    const props = Object.assign(shape);
    props.original = false;
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Tile {...props} />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("mark a gif as favorite before rendering", () => {
    const initialState = {
      favsReducer: { favs: [{ ...shape.gif }] },
      imageLoaderReducer: { loaded: { 1: true } }
    };
    const init = Object.assign(initialState);
    const store = mockStore(init);
    const props = Object.assign(shape);
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Tile {...props} />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
