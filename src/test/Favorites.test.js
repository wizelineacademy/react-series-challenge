import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import Favorites from '../components/containers/Favorites';
import store from '../store';
import actions from '../actions/favoriteGifs'
import dataSource from './__mocks/completeFavoritesDataSource';
const {creators} = actions;

describe('InputSearch', () => {
  it('should render correctly', () => {
    store.dispatch(creators.getFavoriteGifsCompleted(dataSource));
    const output = shallow(
      <Provider store={store}>
        <Router>
          <Favorites store={store} favoriteGifs={dataSource} />
        </Router>
      </Provider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Find controls', () => {
    store.dispatch(creators.getFavoriteGifsCompleted(dataSource));
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Favorites store={store} favoriteGifs={dataSource} />
        </Router>
      </Provider>
    );

    const section = wrapper.find('section');
    expect(section.exists()).toEqual(true);
    const input = wrapper.find('input');
    expect(input.exists()).toEqual(true);
    const value = 'anna faris';
    input.simulate('change', { target: { value } });
    input.simulate('focus');
  });
});
