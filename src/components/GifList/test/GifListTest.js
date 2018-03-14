/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifList from '..';
const props = {
  location: {pathname: 'test'},
  match: {params: 'test'},
  gifs: [],
  searchGifs: jest.fn(),
  searchFavs: jest.fn()
}

describe('GifList', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifList isFavorite={true} gif={{title:'title'}} setFavorite={() => {}} {...props} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(GifList).toBeDefined();
  });
});
