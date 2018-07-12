import React from 'react';
import { shallow } from 'enzyme';
import InfiniteScroll from './InfiniteScroll';

describe('InfiniteScroll', () => {
  test('InfiniteScroll', () => {
    const mockOnLoadMoreData = jest.fn();
    const infiniteScrollComponent = shallow(<InfiniteScroll onLoadMoreData={mockOnLoadMoreData} />);

    expect(infiniteScrollComponent).toMatchSnapshot();
  })
})