import React from 'react';
import configureStore from 'redux-mock-store';

import { shallow } from 'enzyme';

import ConnectedGifCard, { GifCard } from '../../components/GifCard';

describe('GifCard component', () => {
  test('should shallow correctly', () => {
    const props = {
      id: 3,
      images: {
        downsized: {
          url: 'abc.gif'
        }
      },
      title: 'gif',
    };

    const gifCard = shallow(<GifCard { ...props } />);
    expect(gifCard).toMatchSnapshot();
  });

  test('should shallow connected component correctly', () => {
    const store = configureStore()({ favorites: [{ id: 3 }], gifs: [] });
    const container = shallow(<ConnectedGifCard store={store} />);

    expect(container).toMatchSnapshot();
  });
});
