import React from 'react';
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';

describe('Header component', () => {
  test('should shallow with no gifs', () => {
    const header = shallow(
      <GifGrid gifs={ [] } />
    );

    expect(header).toMatchSnapshot();
  });

  test('should shallow with a gif array', () => {
    const header = shallow(
      <GifGrid
        gifs={[
          {
            id: '3',
            title: 'gif',
            images: {
              downsized: {
                url: 'abc.gif'
              }
            }
          }
        ]} />
    );

    expect(header).toMatchSnapshot();
  });
});
