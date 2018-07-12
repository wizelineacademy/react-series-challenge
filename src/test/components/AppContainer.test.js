import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedAppContainer, { AppContainer } from '../../components/AppContainer';


describe('AppContainer component', () => {
  test('should shallow correctly', () => {
    const getTrendingGifs = () => {};
    const header = shallow(<AppContainer getTrendingGifs={ getTrendingGifs } />);

    expect(header).toMatchSnapshot();
  });

  test('should shallow connected component correctly', () => {
    const store = configureStore()({ favorites: [{ id: 3 }], gifs: [] });
    const container = shallow(<ConnectedAppContainer store={ store } />);

    expect(container).toMatchSnapshot();
  });
});
