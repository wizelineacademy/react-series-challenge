import React from 'react';
import { shallow } from 'enzyme';
import Home from '../views/Home';
import store from '../store';

describe('test Home Render', () => {
  it('render structure', () => {
    const component = shallow(<Home  store={store} />);
    expect(component).toMatchSnapshot();
  });
});
