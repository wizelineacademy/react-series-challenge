import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import store from '../store';
import {GiphyList} from '../components/presentational';
import dataSource from './__mocks/completeFavoritesDataSource';

describe('GiphyList', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Provider store={store}>
        <Router>
          <GiphyList dataSource={dataSource} />
        </Router>
      </Provider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Controls structure', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <GiphyList dataSource={dataSource} />
        </Router>
      </Provider>
    );
    const ul = wrapper.find('ul');
    expect(ul.exists()).toEqual(true);
  });
});
