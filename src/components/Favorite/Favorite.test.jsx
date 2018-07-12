import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Favorite from './Favorite';

jest.mock('../GifGrid', () => ({ gifs }) => (Object.keys(gifs).map(k => <div>{gifs[k].id}</div>)));
jest.mock('../NavBar', () => ({ links, ...props }) => (<div><input {...props} />NavBar</div>));
jest.mock('../Template', () => ({ children }) => (<div>{children}</div>));

describe('Favorite component', () => {
  let favoriteGifs = null;
  let fetchFavorite = null;

  beforeEach(() => {
    favoriteGifs = {};
    fetchFavorite = jest.fn();
  });

  it('renders as the expected snapshot', () => {
    const tree = renderer.create((
      <Favorite
        favoriteGifs={favoriteGifs}
        fetchFavorite={fetchFavorite}
      />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('filter favorite gifs by a non-empty name', () => {
    const wrapper = mount((
      <Favorite
        favoriteGifs={favoriteGifs}
        fetchFavorite={fetchFavorite}
      />
    ));
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'new value' } });
    expect(wrapper.state()).toEqual({ filterText: 'new value' });
  });
});
