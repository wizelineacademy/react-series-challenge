import React from 'react';
import { shallow } from 'enzyme';
import DetailContainer from '../DetailContainer';

const paramGifId = {params: {id: 'p3n7NWvfz3u0c1meay'}};
const emptyFavorites = {
  original: [],
  filtered: []
};
const emptyTrending = [];

describe('Detail container', () => {
  it('should render correctly', () => {
    const container = shallow(
      <DetailContainer.WrappedComponent
        trending={emptyTrending}
        favorites={emptyFavorites}
        match={paramGifId}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(DetailContainer).toBeDefined();
  });
});
