import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FavoritePin from '../components/FavoritePin';
import initializeStore from '../config/store';

describe('FavoritePin', () => {

  it('Should render correctly', () => {
    const output = shallow(
        <FavoritePin store={initializeStore(null)}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should simulate a user click to mark it', () => {
    const output = shallow(
      <FavoritePin store={initializeStore()}/>
    ).dive();
    output.simulate('click', {
      preventDefault: () => undefined,
      stopPropagation: () => undefined
    } );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should simulate a user click to unmark it', () => {
    const output = shallow(
      <FavoritePin marked store={initializeStore()}/>
    ).dive();
    output.simulate('click', {
      preventDefault: () => undefined,
      stopPropagation: () => undefined
    } );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
})
