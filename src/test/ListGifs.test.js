import React from 'react';
import { shallow } from 'enzyme';
import ListGifs from '../components/ListGifs';
import store from '../store';

describe('test ListGifs Render', () => {
  it('render structure', () => {
    const component = shallow(<ListGifs  store={store} />);
    expect(component).toMatchSnapshot();
  });
});