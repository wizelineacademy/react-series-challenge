import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import GiphyDetail from '../GiphyDetail';
import giphyMock from '../../presentational/test/mocks/giphyMock.json';

describe('Giphy Detail', () => {
  it('should render without crashing', () => {
    const testGiphyDetail = shallow(
      <GiphyDetail.WrappedComponent
      giphy={giphyMock.data}
      match={{params: { giphyId: 'testId' }}}
      fetchGiphyDetail={() => {return}}
      />);    

    expect(shallowToJson(testGiphyDetail)).toMatchSnapshot()
  })
})



