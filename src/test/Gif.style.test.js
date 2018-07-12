import React from 'react';
import { shallow } from 'enzyme';
import { Gif } from 'components/gif/Gif'
import 'jest-styled-components'

describe('Gif', () => {
  test('renders properly', () => {
    const component = shallow(<Gif />);
    expect(component).toMatchSnapshot()
  })
});
