import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import store from '../store';

describe('test App Render', () => {
  it('render structure', () => {
    const component = shallow(<App  store={store} />);
    expect(component).toMatchSnapshot();
  });
});