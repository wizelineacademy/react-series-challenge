import React from 'react';
import { shallow } from 'enzyme';

import GifGrid from './GifGrid';

jest.mock('../Gif', () => () => (<div>a</div>));

describe('GifGrid compoent', () => {
  let gifs = null;
  let favoriteGifs = null;
  let filterText = null;

  beforeEach(() => {
    gifs = {
      x: { title: 'x', embed_url: 'x', id: 'x' },
      y: { title: 'y', embed_url: 'y', id: 'y' },
    };
    favoriteGifs = {
      x: { title: 'x', embed_url: 'x', id: 'x' },
    };
    filterText = '';
  });

  it('mounts when the expected properties are passed', () => {
    const wrapper = shallow((
      <GifGrid
        gifs={gifs}
        favoriteGifs={favoriteGifs}
        filterText={filterText}
      />));
    expect(wrapper.length).toBe(1);
  });
});
