import React from 'react';
import { shallow } from 'enzyme';
import Details from '../views/Details';
import store from '../store';

describe('test Details Render', () => {
  it('render structure', () => {
    const component = shallow(<Details  store={store} />);
    expect(component).toMatchSnapshot();
  });
});
