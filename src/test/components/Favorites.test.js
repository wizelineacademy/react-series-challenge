import React from 'react';
import renderer from 'react-test-renderer';
import { Favorites } from '../../components';
import wrap from '../wrapper';

describe('Component: Favorites', () => {

  it('will load correctly', () => {
    const component = renderer.create(wrap(<Favorites />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
