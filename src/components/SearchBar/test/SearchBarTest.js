/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchBar from '..';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchBar isFavorite={true} gif={{title:'title'}} setFavorite={() => {}} match={{params:{id:1}}} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(SearchBar).toBeDefined();
  });
});
