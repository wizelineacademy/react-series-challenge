import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import Favorites from '../Favorites';
import giphyMock from '../../presentational/__tests__/mocks/giphyMock.json';

describe('Favorites', () => {
  it('should render without crashing without giphys', () => {
    const testFavorites = shallow(
      <Favorites.WrappedComponent
        list={[]}
        giphys={[]}
      />);    

    expect(shallowToJson(testFavorites)).toMatchSnapshot();
  })

  it('should render without crashing with giphys', () => {
    const testFavorites = shallow(
      <Favorites.WrappedComponent
        list={[giphyMock.data.id]}
        giphys={[giphyMock.data]}
        filter=""
      />);    

    expect(shallowToJson(testFavorites)).toMatchSnapshot();
  })
})



