import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from 'components/favorites/Favorites'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Favorites/>)
})

describe('Favorites', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
