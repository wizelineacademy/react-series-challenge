import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import GiphyContainer from '../GiphyContainer';

describe('GiphyContainer', () => {
  it('should render without crashing', () => {
    const testGiphyContainer = shallow(<GiphyContainer />);    

    expect(shallowToJson(testGiphyContainer)).toMatchSnapshot()
  })

  it('should render children', () => {
    const testGiphyContainer = shallow(
      <GiphyContainer>
        <span>Testing</span>
      </GiphyContainer>
    );

    expect(testGiphyContainer.find('span').text()).toBe('Testing');
  })
})


