import React from 'react';
import ReactDOM from 'react-dom';
import Favorite from '../../Favorite';
import Star from '../../Favorite/styles';

describe('<Favorite />', () => {
  it('Favorite Star renders correctly', () => {
    const props = {
      starred: false,
      onToggleFavorite: () => {},
    };

    const wrapper = shallow(<Favorite {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Styled Component must render as not favorite', () => {
    const props = {
      starred: false,
    };

    const wrapper = shallow(<Star {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Styled Component must render as favorite', () => {
    const props = {
      starred: true,
    };

    const wrapper = shallow(<Star {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
