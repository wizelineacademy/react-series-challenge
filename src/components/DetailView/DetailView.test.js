import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import DetailViewConnected, { DetailView } from "./DetailView";
import configureStore from "redux-mock-store";

describe('DetailView component', () => {
  it('should render correctly', () => {
    const singleGifRequested = jest.fn();
    const output = shallow(
      <DetailView
        match={{params: {gifId: 1}, isExact: true, path: "", url: ""}}
        detailGif={{gif: {}}}
        favoritesGifs={{ allGifs: {} }}
        addGif={jest.fn}
        removeGif={jest.fn}
        getSingleGifRequested={singleGifRequested}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(singleGifRequested.mock.calls.length).toBe(1);
  });
  it('should render component connected', () => {
    const initialState = { detailGif: {}, favoritesGifs: { allGifs:{}, filtered: {}}};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const output = shallow(
      <DetailViewConnected
        store={store}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});