import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../index';
import GifsList from '../../GifsList';
import SearchBar from '../../SearchBar';
import { Header } from '../../Header';

describe('Favorites component', () => {
  it('should render correctly', () => {
    const component = shallow(<Favorites onSearch={jest.fn()} gifs={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should have a Header inside', () => {
    const component = shallow(<Favorites onSearch={jest.fn()} gifs={[]} />);
    expect(component.find(Header).length).toBe(1);
  });

  it('should have a SearchBar inside', () => {
    const component = shallow(<Favorites onSearch={jest.fn()} gifs={[]} />);
    expect(component.find(SearchBar).length).toBe(1);
  });

  it('should have a GifsList inside', () => {
    const component = shallow(<Favorites onSearch={jest.fn()} gifs={[]} />);
    expect(component.find(GifsList).length).toBe(1);
  });
});
