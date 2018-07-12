import React from 'react';
import { render } from 'enzyme';
import { StyledGif } from 'components/gif/Gif.style'
import 'jest-styled-components'

describe('StyledGif', () => {
  test('renders properly', () => {
    const component = render(<StyledGif bgColor={jest.fn()} />);
    expect(component).toMatchSnapshot()
  })
});
