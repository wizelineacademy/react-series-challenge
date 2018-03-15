import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifList from '..';
const props = {
  location: {pathname: 'test'},
  match: {params: 'test'},
  gifs: [],
  searchGifs: jest.fn(),
  searchFavs: jest.fn(),
}

describe('GifList', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifList isFavorite={true} gif={{title:'title'}} setFavorite={() => {}} {...props} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(GifList).toBeDefined();
  });
  it('should call sarchGifs when search', () => {
    const favoriteLocation = {
      pathname: '/search'
    }
    shallow(
      <GifList {...props} location={favoriteLocation} />
    );
    expect(props.searchGifs).toHaveBeenCalled();
  })
  it('should call sarchFavs when favs', () => {
    const favoriteLocation = {
      pathname: '/favorites/search'
    }
    shallow(
      <GifList {...props} location={favoriteLocation} />
    );
    expect(props.searchFavs).toHaveBeenCalled();
  })
  it('should check if favorite', () => {
    const favoriteGifs = [{id:1}]
    const wrapper = shallow(<GifList {...props} favoriteGifs={favoriteGifs}/>);
    expect(wrapper.instance().checkIfFavorite(1)).toBe(true)
  })
  it('should render gifs if exist', () => {
    const favoriteGifs = [{ id:1 }]
    const gifs = [{ id:1 },{ id:2 }]
    const wrapper = shallow(<GifList {...props} favoriteGifs={favoriteGifs} gifs={gifs}/>);
    expect(wrapper.find('GifStyledList').length).toBe(1)
  })
  it('should not render gifs if not exist', () => {
    const gifs = {}
    const wrapper = shallow(<GifList {...props} gifs={gifs}/>);
    expect(wrapper.find('GifStyledList').length).toBe(0)
  })
  it('should requestGifs if exist', () => {
    const requestGifs = jest.fn()
    shallow(<GifList {...props} requestGifs={requestGifs}/>);
    expect(requestGifs).toHaveBeenCalled();
  })
});
