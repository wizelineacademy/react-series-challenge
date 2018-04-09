import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import Home from '../components/containers/Home';
import {GiphyList} from '../components/presentational';
import {GiphyListPagerButton, GiphyLinkFavorite} from '../components/presentational/GiphyList';
import store from '../store';
import actions from '../actions/trendingGifs';
import dataSource from './__mocks/completeFavoritesDataSource';
const {creators} = actions;

describe('Home', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Home store={store} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Find controls', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );

    store.dispatch(creators.getTrendingGifsCompleted(dataSource));
    
    const section = wrapper.find('section');
    expect(section.exists()).toEqual(true);
    const input = wrapper.find('input');
    expect(input.exists()).toEqual(true);
    const value = 'anna faris';
    input.simulate('change', { target: { value } });
    input.simulate('focus');

    const list = wrapper.find(GiphyList);
    expect(list).toHaveLength(1);
    const buttons = list.find(GiphyListPagerButton)
    expect(buttons).toHaveLength(4);
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
    buttons.at(2).simulate('click');
    buttons.at(3).simulate('click');

    
    const links = wrapper.find(GiphyLinkFavorite);
    expect(links).toHaveLength(2);
    links.at(0).simulate('click');
  });
});
