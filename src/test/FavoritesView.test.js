import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FavoritesView from '../components/FavoritesView';
import initializeStore from '../config/store';
import mockedState from './mockedState';

describe('FavoritesView', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <FavoritesView store={initializeStore(null)}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should input a search text to filter favorites', () => {
    const output = shallow(
      <FavoritesView store={initializeStore(null)}/>
    ).dive();
    output.find('SearchBar').simulate('keydown', 'c');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should input a empty text to filter favorites', () => {
    const output = shallow(
      <FavoritesView store={initializeStore(null)}/>
    ).dive();
    output.find('SearchBar').simulate('keydown', '');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render the componet with a mocked state', () => {
    const output = shallow(
      <FavoritesView store={initializeStore(mockedState)}/>
    ).dive();
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
