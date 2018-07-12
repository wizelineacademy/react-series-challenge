import React from 'react';
import { shallow } from 'enzyme';
import { GifList } from 'components/gifList/GifList'
import 'jest-styled-components'

describe('GifList', () => {
  test('renders properly', () => {
    const component = shallow(<GifList />);
    expect(component).toMatchSnapshot()
  })
});
