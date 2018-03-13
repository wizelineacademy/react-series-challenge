import React from 'react';
import renderer from 'react-test-renderer';

import { UserCard } from '../';

describe('<UserCard />', () => {
  const props = {
    data: {
      username: 'krilbert',
      display_name: 'Alfer',
      profile_url: 'http://www.example.com',
      avatar_url: 'http://www.example.com/avatar.jpg',
    },
  };

  test('renders data correctly with verified user', () => {
    props.data.is_verified = true;
    const tree = renderer.create(<UserCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders data correctly with non verified user', () => {
    props.data.is_verified = false;
    const tree = renderer.create(<UserCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
