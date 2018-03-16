import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '../../components';
import wrap from '../wrapper';


describe('Component: Home', () => {
  it('will load correctly', () => {
    const component = renderer.create(wrap(<Home />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
