import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import Navigation from "../";

const mockStore = configureStore();

describe("<Navigation />", () => {
  it("renders properly", () => {
    const initialState = {
      favsReducer: { favs: [] }
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Navigation />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
