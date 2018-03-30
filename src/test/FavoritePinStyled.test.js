import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FavoritePinStyled from '../components/FavoritePin/FavoritePinStyled';

describe('FavoritePinStyled', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <FavoritePinStyled/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render a marked pin correctly', () => {
    const output = shallow(
      <FavoritePinStyled marked/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
