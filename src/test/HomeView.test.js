import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import HomeView from '../components/HomeView';
import initializeStore from '../config/store';
import mockedState from './mockedState';

describe('HomeView', () => {

  it('Should render correctly', () => {
    const output = shallow(
      <HomeView store={initializeStore(null)}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should input a search text', () => {
    const output = shallow(
      <HomeView store={initializeStore(null)}/>
    ).dive();
    output.find('SearchBar').simulate('keydown', 'c');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render with some gifs on it', () => {
    const output = shallow(
      <HomeView store={initializeStore(mockedState)}/>
    ).dive();
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
