import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Menu from "../index";

describe("Menu", () => {
  it("should render without crashing", () => {
    const testMenu = shallow(<Menu />);

    expect(shallowToJson(testMenu)).toMatchSnapshot();
  });
});
