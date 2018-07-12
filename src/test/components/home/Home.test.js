import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../components/home';
import { Item } from '../../../components/gif';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Home component', () => {
  test('render home without gifs', () => {
    const initialState = {
      data: {
        gifs: {},
        favorites: {}
      }
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Home store={store} />);

    expect(wrapper.length).toBe(1);
  });

  test('render search results if has searchQuery state property setted', () => {
    const initialState = {
      data: {
        searchQuery: 'memes',
        gifs: {},
        favorites: {}
      }
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Home store={store} />);

    expect(wrapper.length).toBe(1);
  });
});
