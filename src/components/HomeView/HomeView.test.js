import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HomeViewConnected, { HomeView } from "./HomeView";
import configureStore from "redux-mock-store";

describe('HomeView component', () => {
  it('should render correctly', () => {
    const output = shallow(
      <HomeView
        getTrendingGifsRequested={jest.fn}
        searchGifsClear={jest.fn}
        searchGifsRequested={jest.fn}
        trendingGifs={{data: []}}
        searchingGifs={{data: []}}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render component connected', () => {
    const initialState = { trendingGifs: { data:{} }, searchingGifs: { data: {}} };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const output = shallow(
      <HomeViewConnected
        store={store}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});