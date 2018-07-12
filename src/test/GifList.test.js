import React from 'react';
import { shallow } from 'enzyme';
import { GifList } from 'components/gifList/GifList'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<GifList/>)
})

describe('GifList', () => {
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
