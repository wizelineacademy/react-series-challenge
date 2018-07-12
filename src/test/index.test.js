import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';

describe('App', () => {
  it('should render the app correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
