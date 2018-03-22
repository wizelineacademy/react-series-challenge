import React from 'react';
import { shallow } from 'enzyme';
import Favorite from '../../Favorite';

describe('<Favorite />', () => {
  it('Favorite Star renders correctly', () => {
    const props = {
      starred: false,
      onToggleFavorite: () => {},
    };

    const wrapper = shallow(<Favorite {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
