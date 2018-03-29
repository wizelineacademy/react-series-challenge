import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Gif } from "./Gif";

describe('Gif component', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Gif
        gif={{ id: '123', title: 'gif' }}
        addGif={jest.fn}
        removeGif={jest.fn}
        fullWidth={false}
        isFavorited={false}
        isInDetail={false}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('renders with preview image correctly', () => {
    const output = shallow(
      <Gif
        gif={{ id: '123', title: 'gif', images:{ original: '' } }}
        addGif={jest.fn}
        removeGif={jest.fn}
        fullWidth={true}
        isFavorited={true}
        isInDetail={true}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});