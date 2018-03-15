import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import TrendingGiphys from '../TrendingGiphys';
import giphyMock from '../../presentational/__tests__/mocks/giphyMock.json';

describe('Trending Giphys', () => {
  it('should render without crashing without giphys', () => {
    const testTrendingGiphys = shallow(
      <TrendingGiphys.WrappedComponent
        fetchTrendingGiphys={() => { return; }}
        giphys={[]}
      />);    

    expect(shallowToJson(testTrendingGiphys)).toMatchSnapshot();
  })

  it('should render without crashing with giphys', () => {
    const testTrendingGiphys = shallow(
      <TrendingGiphys.WrappedComponent
        fetchTrendingGiphys={() => { return; }}
        giphys={[giphyMock.data]}
      />);    

    expect(shallowToJson(testTrendingGiphys)).toMatchSnapshot();
  })
})




