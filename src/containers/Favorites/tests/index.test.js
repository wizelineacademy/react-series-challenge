import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesContainer } from '../index';

describe('FavoritesContainer', () => {
  let props = {};
  const setPathMock = jest.fn();
  const loadFavoritesMock = jest.fn();
  const searchFavoritesMock = jest.fn();
  beforeEach(() => {
    props = {
      match: { path: '/' },
      setPath: setPathMock,
      loadFavorites: loadFavoritesMock,
      searchFavorites: searchFavoritesMock,
      gifs: [],
    };
  });

  it('should render correctly the FavoritesContainer', () => {
    const component = shallow(<FavoritesContainer {...props} />);
    expect(component).toMatchSnapshot();
  });
});
