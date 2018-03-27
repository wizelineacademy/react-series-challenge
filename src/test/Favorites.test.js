import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../views/Favorites';
import store from '../store';

describe('test Home Render', () => {
  it('render structure', () => {
    const component = shallow(<Favorites  store={store} />);
    expect(component).toMatchSnapshot();
  });
});
