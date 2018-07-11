import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';
import GifModal from '../../../containers/GifModal';
import { Header } from '../../Header';
import SearchBar from '../../SearchBar';
import GifsList from '../../GifsList';

describe('Home component', () => {
  const props = {
    isLoading: false,
    gifs: [],
    searchGifs: jest.fn(),
  };
  it('should render correctly the home component', () => {
    const component = shallow(<Home {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should have a GifModal container inside', () => {
    const component = shallow(<Home {...props} />);
    expect(component.find(GifModal).length).toBe(1);
  });

  it('should have a Header inside', () => {
    const component = shallow(<Home {...props} />);
    expect(component.find(Header).length).toBe(1);
  });

  it('should have a SearchBar inside', () => {
    const component = shallow(<Home {...props} />);
    expect(component.find(SearchBar).length).toBe(1);
  });

  it('should have a GifsList inside', () => {
    const component = shallow(<Home {...props} />);
    expect(component.find(GifsList).length).toBe(1);
  });
});
