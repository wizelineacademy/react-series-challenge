/* leave first line blank for cq */
import FilteredGifs from "./FilteredGifs";
import React from "react";
import { shallow } from "enzyme";

describe("FilteredGifs", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FilteredGifs />);
  });

  it("should render component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
