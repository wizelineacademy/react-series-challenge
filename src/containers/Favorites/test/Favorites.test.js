import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FavoritesContainer from '..';
import { createMockStore } from 'redux-test-utils';

const props = {
  location: {pathname: 'test'},
  match: {params: 'test'},
  gifs: [],
  searchGifs: jest.fn(),
  searchFavs: jest.fn(),
}

describe('FavoritesContainer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <FavoritesContainer.WrappedComponent {...props}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should be defined', () => {
   expect(FavoritesContainer).toBeDefined();
  });
  it("should render successfully ", () => {
  const testState = {
    favoriteGifs: []
  };
  const store = createMockStore(testState)
  const component = shallow(<FavoritesContainer store={store} />);
  expect(component).toBeDefined();
  });
});
