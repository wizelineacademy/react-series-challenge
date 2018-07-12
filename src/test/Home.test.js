import React from 'react';
import { render } from 'enzyme';
import { Home } from 'components/home/Home'

describe('Home', () => {
  let wrapper = render(<Home/>)
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
