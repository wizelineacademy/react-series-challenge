import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import TileList from "../";

const mockStore = configureStore();

const shape = {
  loading: false,
  gifs: [
    {
      id: 1,
      images: {
        original: { width: 400, height: 400, url: "http://original" },
        fixed_width: { width: 300, height: 300, url: "http://fixed" }
      }
    },
    {
      id: 2,
      images: {
        original: { width: 400, height: 400, url: "http://original" },
        fixed_width: { width: 300, height: 300, url: "http://fixed" }
      }
    }
  ]
};

const initialState = {
  favsReducer: { favs: [] },
  imageLoaderReducer: { loaded: {} }
};

describe("<TileList />", () => {
  it("renders properly", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    const props = Object.assign(shape);
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <TileList {...props} />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the loader", () => {
    const props = {
      gifs: {},
      loading: true
    };
    ReactDOM.createPortal = node => node;
    const component = renderer.create(<TileList {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
