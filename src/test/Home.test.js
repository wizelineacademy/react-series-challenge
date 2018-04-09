import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Home from '../components/containers/Home';
import {GiphyList} from '../components/presentational';
import store from '../store';
import { Provider } from 'react-redux';
import dataSource from './__mocks/completeFavoritesDataSource';

describe('Home', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Home store={store} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Find controls', () => {
    const wrapper = mount(
      <Provider store={store}><Home trendingGifs={dataSource} /></Provider>
    );
    
    const section = wrapper.find('section');
    expect(section.exists()).toEqual(true);
    const input = wrapper.find('input');
    expect(input.exists()).toEqual(true);
    const value = 'anna faris';
    input.simulate('change', { target: { value } });
    input.simulate('focus');
    expect(wrapper.find(GiphyList)).toHaveLength(1);
  });
});
