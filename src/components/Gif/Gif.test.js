import React from 'react';
import { shallow, mount } from 'enzyme';
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
  it('calls to addGif function if is not favorite', () => {
    const addGif = jest.fn();
    const output = mount(
      <Gif
        gif={{ id: '123', title: 'gif', images:{ original: '' } }}
        addGif={addGif}
        removeGif={jest.fn}
        fullWidth={true}
        isFavorited={false}
        isInDetail={true}
      />
    );
    output.find('button').simulate('click');
    expect(addGif.mock.calls.length).toBe(1);
  });
  it('calls to removeGif function if is favorite', () => {
    const removeGif = jest.fn();
    const output = mount(
      <Gif
        gif={{ id: '123', title: 'gif', images:{ original: '' } }}
        addGif={jest.fn}
        removeGif={removeGif}
        fullWidth={true}
        isFavorited={true}
        isInDetail={true}
      />
    );
    output.find('button').simulate('click');
    expect(removeGif.mock.calls.length).toBe(1);
  });
});