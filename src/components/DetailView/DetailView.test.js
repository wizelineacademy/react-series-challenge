import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { DetailView } from "./DetailView";

describe('DetailView component', () => {
  it('should render correctly', () => {
    const output = shallow(
      <DetailView
        match={{params: {gifId: 1}, isExact: true, path: "", url: ""}}
        detailGif={{gif: {}}}
        favoritesGifs={{ allGifs: {} }}
        addGif={jest.fn}
        removeGif={jest.fn}
        getSingleGifRequested={jest.fn}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  })
});