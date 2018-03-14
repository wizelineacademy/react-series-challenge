import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import App from '../src/App';

const APP_TITLE = 'Polaroid Gifs by Guinea';

describe('App', () => {
  it('should render correctly', () => {
    const output = shallow(
      <App />
    );
    expect(output.find('.giphy-header')).toBeTruthy();
    expect(output.find('.App')).toBeTruthy();
    expect(output.find('.App-title').childAt(0).text()).toBe(APP_TITLE);
    expect(output.find('Switch').children()).toHaveLength(5);
  });
});