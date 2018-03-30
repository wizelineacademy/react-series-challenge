import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../components/navbar';
import store from '../store'

describe('test Navbar Render', () => {
  it('render structure', () => {
    const renderedComponent = shallow(<Navbar store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  })
})