import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { FavoritesView } from "./FavoritesView";

describe('FavoritesView component', () => {
  it('should render correctly', () => {
    const output = shallow(
      <FavoritesView
        filterGifsClear={jest.fn}
        favoritesGifs={{ allGifs: {}, filtered: {} }}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  })
});