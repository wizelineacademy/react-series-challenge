import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import ImageLoader from "../";
import loaderShape from "./__mocks__/loaderProps";

const mockStore = configureStore();

describe("<ImageLoader />", () => {
  it("renders properly", () => {
    const initialState = {
      imageLoaderReducer: { loaded: {} }
    };
    const store = mockStore(initialState);
    const props = loaderShape;

    const component = renderer.create(
      <Provider store={store}>
        <ImageLoader {...props} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("returns null when the image has not loaded", () => {
    const initialState = {
      imageLoaderReducer: { loaded: {} }
    };
    const store = mockStore(initialState);

    const props = loaderShape;
    const component = renderer.create(
      <Provider store={store}>
        <ImageLoader {...props} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("returns an image when loaded", () => {
    const initialState = {
      imageLoaderReducer: { loaded: { 1: true } }
    };
    const store = mockStore(initialState);

    const props = loaderShape;
    const component = renderer.create(
      <Provider store={store}>
        <ImageLoader {...props} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("returns a downsized image", () => {
    const initialState = {
      imageLoaderReducer: { loaded: { 1: true } }
    };
    const store = mockStore(initialState);

    const props = loaderShape;
    props.original = false;
    const component = renderer.create(
      <Provider store={store}>
        <ImageLoader {...props} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
