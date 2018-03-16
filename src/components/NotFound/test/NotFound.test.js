import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from "../index";

describe('NotFound component', () => {
  it('should render', () => {
    const component = renderer.create(
      <NotFound />
    );
    expect(component).toMatchSnapshot();
  });
});
