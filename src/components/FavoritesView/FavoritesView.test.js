import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

import FavoritesViewConnected, { FavoritesView } from "./FavoritesView";
import {GifList} from "../GifList/GifList";
import SearchBar from "../SearchBar/SearchBar";

describe('FavoritesView component', () => {
  it('should render correctly', () => {
    const output = shallow(
      <FavoritesView
        filterGifsClear={jest.fn}
        favoritesGifs={{ allGifs: {}, filtered: {} }}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should call the filter Search function correctly', () => {
    const output = shallow(
      <FavoritesView
        filterGifsClear={jest.fn}
        favoritesGifs={{ allGifs: {}, filtered: {} }}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render component connected', () => {
    const initialState = { allGifs: {}, filtered: {} };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const output = shallow(
      <FavoritesViewConnected
        store={store}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});