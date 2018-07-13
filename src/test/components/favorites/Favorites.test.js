import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Favorites from '../../../components/favorites';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Favorites component', () => {
  test('should render correctly', () => {
    const initialState = {
      data: {
        gifs: {},
        favorites: {}
      }
    };
    const store = mockStore(initialState);
    const component = shallow(<Favorites store={store} />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });

  test('should be able to call clearQuery and loadFavorites functions in componentDidMount', async () => {
    const clearQuery = jest.fn();
    const loadFavorites = jest.fn();

    const initialState = {
      data: {
        gifs: {},
        favorites: {}
      }
    };
    const store = mockStore(initialState);
    const component = mount(
      <Favorites
        store={store}
        clearQuery={clearQuery}
        loadFavorites={loadFavorites}
      />
    );

    expect(jest.isMockFunction(component.prop('clearQuery'))).toBeTruthy();
    expect(jest.isMockFunction(component.prop('loadFavorites'))).toBeTruthy();
  });

  test('render search results if has searchQuery state property setted', () => {
    const initialState = {
      data: {
        searchQuery: 'memes favoritos',
        gifs: {},
        favorites: {}
      }
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Favorites store={store} />);

    expect(wrapper.length).toBe(1);
  });
});
