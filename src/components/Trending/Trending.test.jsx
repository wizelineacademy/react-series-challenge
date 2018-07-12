import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Trending from './Trending';

jest.mock('../GifGrid', () => ({ gifs }) => (Object.keys(gifs).map(k => <div>{gifs[k].id}</div>)));
jest.mock('../NavBar', () => ({ links, ...props }) => (<div><input {...props} />NavBar</div>));
jest.mock('../Template', () => ({ children }) => (<div>{children}</div>));

describe('Trending component', () => {
  let trendingGifs = null;
  let favoriteGifs = null;
  let filterTrendingText = null;
  let fetchTrending = null;
  let searchTrending = null;
  let fetchFavorite = null;

  beforeEach(() => {
    trendingGifs = {};
    favoriteGifs = {};
    filterTrendingText = '';
    fetchTrending = jest.fn();
    searchTrending = jest.fn();
    fetchFavorite = jest.fn();
  });

  it('renders as the expected snapshot', () => {
    const tree = renderer.create((
      <Trending
        trendingGifs={trendingGifs}
        favoriteGifs={favoriteGifs}
        filterTrendingText={filterTrendingText}
        fetchTrending={fetchTrending}
        searchTrending={searchTrending}
        fetchFavorite={fetchFavorite}
      />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('searchs for trending gifs by a non-empty name', () => {
    const wrapper = mount((
      <Trending
        trendingGifs={trendingGifs}
        favoriteGifs={favoriteGifs}
        filterTrendingText={filterTrendingText}
        fetchTrending={fetchTrending}
        searchTrending={searchTrending}
        fetchFavorite={fetchFavorite}
      />
    ));
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'new value' } });
    expect(searchTrending.mock.calls.length).toBe(1);
  });

  it('searchs for trending gifs by a empty name', () => {
    const wrapper = mount((
      <Trending
        trendingGifs={trendingGifs}
        favoriteGifs={favoriteGifs}
        filterTrendingText={filterTrendingText}
        fetchTrending={fetchTrending}
        searchTrending={searchTrending}
        fetchFavorite={fetchFavorite}
      />
    ));
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '' } });
    expect(fetchTrending.mock.calls.length).toBe(2);
  });
});
