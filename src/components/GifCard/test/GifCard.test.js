import React from 'react';
import GifCard from "../../../components/GifCard";
import {mount, shallow} from "enzyme";

const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};

describe('GifCard component', () => {
  it('should render', () => {
    const component = shallow(
      <GifCard.WrappedComponent
        gif={mockGif}
        isFavorite={false}
        isDetailBtnVisible={false}
        imageSize={'small'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render visible btn', () => {
    const component = shallow(
      <GifCard.WrappedComponent
        gif={mockGif}
        isFavorite={false}
        isDetailBtnVisible
        imageSize={'small'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render visible btn and click it', () => {
    const toggleFavorite = jest.fn();
    const push = jest.fn();
    const component = shallow(
      <GifCard.WrappedComponent
        gif={mockGif}
        isFavorite={false}
        isDetailBtnVisible
        imageSize={'small'}
        toggleFavorite={toggleFavorite}
        history={{push}}
      />
    );
    const detailBtn = component.find('Btn').get(0);
    mount(detailBtn).simulate('click');
    expect(mount(detailBtn).prop('alt')).toEqual('detail');

    const favoriteBtn = component.find('Btn').get(1);
    mount(favoriteBtn).simulate('click');
    expect(mount(favoriteBtn).prop('alt')).toEqual('favorite');
  });

  it('should render filled heart', () => {
    const component = shallow(
      <GifCard.WrappedComponent
        gif={mockGif}
        isFavorite
        isDetailBtnVisible
        imageSize={'small'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the big image', () => {
    const component = shallow(
      <GifCard.WrappedComponent
        gif={mockGif}
        isFavorite
        isDetailBtnVisible
        imageSize={'original'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
