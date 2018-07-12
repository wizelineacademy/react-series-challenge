import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Gif from './Gif';

describe('Gif component', () => {
  let gif = null;

  beforeEach(() => {
    gif = {
      title: 'hello',
      embed_url: 'url',
      id: 'XX',
      isFavorite: true,
    };
  });

  it('renders the liked Gif', () => {
    gif.isFavorite = true;
    const tree = renderer.create((
      <Gif
        object={gif}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the not liked Gif', () => {
    gif.isFavorite = false;
    const tree = renderer.create((
      <Gif
        object={gif}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls addFavorite function when clicking on icon image and the gif has not been liked', () => {
    gif.isFavorite = false;
    const addToFavorites = jest.fn();
    const wrapper = shallow((
      <Gif
        object={gif}
        addFavorite={addToFavorites}
        removeFavorite={jest.fn()}
      />));
    const img = wrapper.childAt(2);
    img.simulate('click');
    expect(addToFavorites.mock.calls.length).toEqual(1);
  });

  it('calls removeFavorite function when clicking on icon image and the gif has been liked', () => {
    gif.isFavorite = true;
    const removeFromFavorites = jest.fn();
    const wrapper = shallow((
      <Gif
        object={gif}
        addFavorite={jest.fn()}
        removeFavorite={removeFromFavorites}
      />));
    const img = wrapper.childAt(2);
    img.simulate('click');
    expect(removeFromFavorites.mock.calls.length).toEqual(1);
  });
});
