import React from 'react';
import { shallow } from 'enzyme';
import { StyledHeading1 } from 'components/Heading1.style'
import 'jest-styled-components'

describe('StyledHeading1', () => {
  test('renders properly', () => {
    const component = shallow(<StyledHeading1 />);
    expect(component).toMatchSnapshot()
  })
});
