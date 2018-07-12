import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  test('App', () => {
    const appComponent = shallow(<App />);
    expect(appComponent).toMatchSnapshot();
  })
})