import React from 'react';
import { shallow } from 'enzyme';
import { spy } from "sinon";

import toJson from 'enzyme-to-json';

import Giphys from "./../index";
import json from "./mock.json";

describe('<Giphys> ', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <Giphys />
    );
  });

  it('should be an empty div is not PROPS data passed!', () => {
    expect(wrapper.children().length).toEqual(0);
  });

  it('should have number of children if data doenst have filter', () => {
    wrapper.setProps({ data: {data: json.likes}, local: json  })
    expect(wrapper.children().length).toEqual(json.likes.length);
  });

  it('if FILTER is set should only showed', () => {
    json.filter = json.likes[0].title.substring(1, 4);
    wrapper.setProps({ data: {data: json.likes}, local: json  })
    expect(wrapper.children().length).toEqual(1);
  });

  it('if FILTER is set should only showed', () => {
    json.filter = json.likes[0].title.substring(1, 4);
    wrapper.setProps({ data: {data: json.likes}, local: json  })
    expect(wrapper.children().length).toEqual(1);
  });

  it('if button is clicked should call handleKeep', () => {
    const handleKeepSpy = spy(wrapper.instance(), "handleKeep");

    expect(handleKeepSpy.calledOnce).toBeFalsy();
    wrapper.setProps({ data: { data: json.likes }, local: json , localModify: () => {} });
    wrapper.find('giphys__StyledButton').simulate('click', { preventDefault() { } });
    expect(handleKeepSpy.calledOnce).toBeTruthy();
  });

  it('Will check with the snaptshot ', () => {
    wrapper.setProps({ data: { data: json.likes }, local: json , localModify: () => {} });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});