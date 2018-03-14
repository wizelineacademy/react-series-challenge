/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifItem from '..';


describe('GifItem', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifItem isFavorite={true} gif={{title:'title'}} setFavorite={() => {}} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(GifItem).toBeDefined();
 });
});
