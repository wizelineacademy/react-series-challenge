import React from 'react';
import {FlexContainer} from './components.styled';
import renderer from 'react-test-renderer';

describe('Shared styled components', () => {
  it('flex container renders correctly', () => {
    const tree = renderer
      .create(<FlexContainer>Child</FlexContainer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
