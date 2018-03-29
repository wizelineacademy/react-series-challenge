import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { HomeView } from "./HomeView";

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
  })
});