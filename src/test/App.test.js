import React from 'react';
import { shallow } from 'enzyme';
import App from '../App'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App/>)
})

describe('App', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
