/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifDetail from '..';

describe('GifDetail', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifDetail isFavorite={true} gif={{title:'title'}} setFavorite={() => {}} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(GifDetail).toBeDefined();
  });
});
