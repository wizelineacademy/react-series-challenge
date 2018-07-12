import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import GifContainer from './GifContainer';

describe('GifContainer component', () => {
  let initialState = null;
  let store = null;
  let object = null;

  beforeEach(() => {
    initialState = {
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
    };
    store = configureStore()(initialState);
    object = {
      embed_url: '',
      title: '',
      id: '',
      isFavorite: false,
    };
  });

  it('renders the component whe it is provided with a store', () => {
    const wrapper = shallow(<GifContainer store={store} object={object} />);
    expect(wrapper.length).toEqual(1);
  });

  it('set props according to initial state', () => {
    const wrapper = shallow(<GifContainer store={store} object={object} />);
    expect(wrapper.prop('addFavorite')).toBeTruthy();
    expect(wrapper.prop('removeFavorite')).toBeTruthy();
  });
});
