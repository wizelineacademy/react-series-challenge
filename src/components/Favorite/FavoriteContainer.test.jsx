import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import FavoriteContainer from './FavoriteContainer';

jest.mock('./Favorite', () => () => (<div>a</div>));

describe('FavoriteContainer component', () => {
  let initialState = null;
  let store = null;

  beforeEach(() => {
    initialState = {
      favoriteGifs: {},
      fetchFavorite: jest.fn(),
    };
    store = configureStore()(initialState);
  });

  it('renders the component whe it is provided with a store', () => {
    const wrapper = shallow(<FavoriteContainer store={store} />);
    expect(wrapper.length).toEqual(1);
  });

  it('set props according to initial state', () => {
    const wrapper = shallow(<FavoriteContainer store={store} />);
    expect(wrapper.prop('favoriteGifs')).toBeTruthy();
    expect(wrapper.prop('fetchFavorite')).toBeTruthy();
  });
});
