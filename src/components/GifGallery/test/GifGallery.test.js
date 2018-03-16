import React from 'react';
import GifGallery from "../index";
import {mount, shallow} from "enzyme";

const emptyFavorites = {
  original: [],
  filtered: []
};
const emptyTrending = [];
const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};
const mockFavorites = {
  original: [mockGif],
  filtered: [mockGif]
};
const mockTrending = [mockGif];

describe('GifCard component', () => {
  it('should render no GIFS', () => {
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'favorites'}
        favorites={mockFavorites}
        fetchTrendingGifs={jest.fn()}
        trending={emptyTrending}
        updateFilteredFavorites={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render one GIF', () => {
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'GIPHY'}
        favorites={emptyFavorites}
        fetchTrendingGifs={jest.fn()}
        trending={mockTrending}
        updateFilteredFavorites={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should perform a click', () => {
    const push = jest.fn();
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'GIPHY'}
        favorites={emptyFavorites}
        fetchTrendingGifs={jest.fn()}
        trending={mockTrending}
        updateFilteredFavorites={jest.fn()}
        history={{push}}
      />
    );
    let navigationBtn = component.find('NavigationBtn').get(0);
    mount(navigationBtn).simulate('click');
    expect(push).toHaveBeenCalled();

    navigationBtn = component.find('NavigationBtn').get(1);
    mount(navigationBtn).simulate('click');
    expect(push).toHaveBeenCalled();
  });

  it("responds to name change", () => {
    const event1 = {target: {id: "toSearch", value: "dog"}};
    const event2 = {target: {id: "toSearch", value: ""}};
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'GIPHY'}
        favorites={emptyFavorites}
        fetchSearchGifs={jest.fn()}
        fetchTrendingGifs={jest.fn()}
        trending={mockTrending}
        updateFilteredFavorites={jest.fn()}
      />
    );
    jest.spyOn(component.instance(), "handleInputOnChange");
    component.update();
    component.find('SearchInput').simulate('change', event1);
    component.find('SearchInput').simulate('change', event2);
  })
});
