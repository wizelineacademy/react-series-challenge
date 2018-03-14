import React from 'react';
import { MemoryRouter } from 'react-router';
import Header from '../../Header';

describe('<Header />', () => {
  it('Header must be rendered without crashing', () => {
    const wrapper = shallow(
      <Header>
        Content
      </Header>
    );
    expect(wrapper.find('img')).toBeTruthy();
  });
});
