import React from 'react';
import { mockGif } from "../../mocks";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";

import GifView from "../../../components/MainPanel/GifView";
import StyledGifView, { Gif } from '../../../components/styled/GifView.styled';
import Star from '../../../components/MainPanel/Star';

import store from '../../../store';

describe('GifView', () => {
  
  it('GifView should have its children', () => {
    const comp = mount(
      <Provider store={store}>
        <GifView
          src={mockGif.url}
          id={mockGif.id}
          favorite={false}
          gif={mockGif}
        />
      </Provider>
    );
    expect(comp.find(StyledGifView)).toHaveLength(1);
    expect(comp.find(Gif)).toHaveLength(1);
    expect(comp.find(Star)).toHaveLength(1);
  })

  it('GifView should match snapshot', () => {
    const comp = shallow(
        <GifView
          src={mockGif.url}
          id={mockGif.id}
          favorite={false}
          gif={mockGif}
        />
    );
    expect(comp).toMatchSnapshot();
  })

})
