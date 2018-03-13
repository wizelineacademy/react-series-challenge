import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import Search from "../";

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
  }
};

describe("<Search />", () => {
  it("renders properly", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Search />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
