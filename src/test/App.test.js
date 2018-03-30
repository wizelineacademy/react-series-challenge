import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import store from '../store'

describe('test App Render', () => {
  it('render structure', () => {
    const renderedComponent = shallow(<App store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  })
})