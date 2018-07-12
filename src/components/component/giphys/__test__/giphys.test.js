import React from 'react';
import { shallow } from 'enzyme';
import { spy } from "sinon";

import Giphys from "./../index";
import json from "./mock.json";



describe('<Giphys> ', () => {

  let wraper;

  beforeAll(() => {
    wraper = shallow(
      <Giphys />
    );
  });

  it('should be an empty div is not PROPS data passed!', () => {
    expect(wraper.children().length).toEqual(0);
  });

  it('should have number of children if data doenst have filter', () => {
    wraper.setProps({ data: {data: json.likes}, local: json  })
    expect(wraper.children().length).toEqual(json.likes.length);
  });

  it('if FILTER is set should only showed', () => {
    json.filter = json.likes[0].title.substring(1, 4);
    wraper.setProps({ data: {data: json.likes}, local: json  })
    expect(wraper.children().length).toEqual(1);
  });

  it('if FILTER is set should only showed', () => {
    json.filter = json.likes[0].title.substring(1, 4);
    wraper.setProps({ data: {data: json.likes}, local: json  })
    expect(wraper.children().length).toEqual(1);
  });

  it('if button is clicked should call handleKeep', () => {
    const handleKeepSpy = spy(wraper.instance(), "handleKeep");

    expect(handleKeepSpy.calledOnce).toBeFalsy();
    wraper.setProps({ data: { data: json.likes }, local: json , modifyLocal: () => {} });
    wraper.find('button').simulate('click', { preventDefault() { } });
    expect(handleKeepSpy.calledOnce).toBeTruthy();
  });

});