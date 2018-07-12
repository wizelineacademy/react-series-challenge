import React from 'react';
import { shallow } from 'enzyme';
import { EmptyPlaceholder } from 'components/EmptyPlaceholder.style'
import 'jest-styled-components'

describe('EmptyPlaceholder', () => {
  test('renders properly', () => {
    const component = shallow(<EmptyPlaceholder />);
    expect(component).toMatchSnapshot()
  })
});
