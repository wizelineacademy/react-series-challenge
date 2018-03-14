/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FavoriteButton from '..';

const mockFn = jest.fn();

describe('FavoriteButton', () => {
  it('should render correctly', () => {
    const output = shallow(
      <FavoriteButton isFavorite={true} gif={{}} setFavorite={() => {}} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(FavoriteButton).toBeDefined();
  });
  it('should call mock function when button is clicked', () => {
    const tree = shallow(
      <FavoriteButton setFavorite={mockFn} />
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
