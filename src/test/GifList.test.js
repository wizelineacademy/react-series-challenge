import React from 'react';
import { shallow } from 'enzyme';
import { GifList } from 'components/gifList/GifList'

describe('GifList', () => {
  let wrapper = shallow(<GifList/>);

  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
