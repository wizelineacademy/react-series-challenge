import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import GiphyDetail from '../GiphyDetail';
import giphyMock from '../../presentational/__tests__/mocks/giphyMock.json';

describe('Giphy Detail', () => {
  it('should render without crashing', () => {
    const testGiphyDetail = shallow(
      <GiphyDetail.WrappedComponent
      giphy={giphyMock.data}
      match={{params: { giphyId: 'testId' }}}
      fetchGiphyDetail={() => {return}}
      />);    

    expect(shallowToJson(testGiphyDetail)).toMatchSnapshot();
  })

  it('should render nothing without crashing if no giphy is provided', () => {
    const testGiphyDetail = shallow(
      <GiphyDetail.WrappedComponent
      match={{params: { giphyId: 'testId' }}}
      fetchGiphyDetail={() => {return}}
      />);    

    expect(shallowToJson(testGiphyDetail)).toBeFalsy();
  })
})



