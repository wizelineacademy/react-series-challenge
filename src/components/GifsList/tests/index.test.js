import React from 'react';
import { shallow } from 'enzyme';
import GifsList from '../index';

describe('GifsList component', () => {
  it('should render correctly', () => {
    const props = {
      gifs: [
        {
          id: 'id.1',
        },
      ],
      loading: false,
    };
    const component = shallow(<GifsList {...props} />);
    expect(component).toMatchSnapshot();
  });
});
