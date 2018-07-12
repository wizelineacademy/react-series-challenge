import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import AppRouting from './AppRouting';

jest.mock('./components/Trending', () => () => (<div>Trending</div>));
jest.mock('./components/Favorite', () => () => (<div>Favorite</div>));

describe('AppRouting component', () => {
  let wrapper = null;

  it('renders the Trending component when the route is other that /trending', () => {
    const random = Math.random() * 10;
    wrapper = mount((
      <MemoryRouter initialEntries={[`/random${random}`]}>
        <AppRouting />
      </MemoryRouter>
    ));
    expect(wrapper.contains(<div>Trending</div>)).toBeTruthy();
  });

  it('renders the Trending component when the route is /trending', () => {
    wrapper = mount((
      <MemoryRouter initialEntries={['/trending']}>
        <AppRouting />
      </MemoryRouter>
    ));
    expect(wrapper.contains(<div>Trending</div>)).toBeTruthy();
  });

  it('renders the Favorite component when the route is /favorite', () => {
    wrapper = mount((
      <MemoryRouter initialEntries={['/favorite']}>
        <AppRouting />
      </MemoryRouter>
    ));
    expect(wrapper.contains(<div>Favorite</div>)).toBeTruthy();
  });
});
