import React from 'react';
import {Detail} from "../index";
import {shallow} from "enzyme";
import {GifCard} from "../../GifCard";

const paramGifId = {params: {id: 'p3n7NWvfz3u0c1meay'}};
const emptyDataSource = [];
const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};
const mockDataSource = [mockGif];

describe('Detail component', () => {
  const func = jest.fn();
  it('should render component', () => {
    const component = shallow(
      <Detail trending={emptyDataSource} favorites={emptyDataSource} match={paramGifId}/>
    );
    process.stdout.write(JSON.stringify(component) + "\n");
    expect(component.contains(
      <GifCard
        gif={mockGif}
        isFavorite={true}
        isDetailBtnVisible={false}
        imageSize={'original'}
        toggleFavorite={func}
      />
    )).toEqual(false);
  });

  it('should render component', () => {
    const component = shallow(
      <Detail trending={emptyDataSource} favorites={mockDataSource} match={paramGifId}/>
    );
    process.stdout.write(JSON.stringify(component) + "\n");
    expect(component).toHaveLength(1);
  });

  // it('should render component', () => {
  //   const component = renderer.create(
  //     <Detail trending={mockDataSource} favorites={emptyDataSource} match={paramGifId}/>
  //   );
  //   expect(component).toMatchSnapshot();
  // });
});