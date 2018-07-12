import React from 'react';
import renderer from 'react-test-renderer';
import Template from './Template';

describe('Template component', () => {
  it('renders as the snapshot dictates', () => {
    const tree = renderer.create((
      <Template>Ipsum Lorem Dolor</Template>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
