import React from 'react';
import { shallow } from 'enzyme';

import { GifCard } from '../../components/GifCard';

describe('Header component', () => {
  test('should shallow correctly', () => {
    const props = {
      id: '3',
      title: 'gif',
      images: {
        downsized: {
          url: 'abc.gif'
        }
      }
    };

    const header = shallow(
      <GifCard { ...props } />
    );

    expect(header).toMatchSnapshot();
  });
});
