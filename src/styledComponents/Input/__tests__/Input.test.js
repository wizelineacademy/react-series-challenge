import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../Input';

describe('<Input />', () => {
  it('Input Component must render', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});
