import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import HomePage from "../index";

describe("HomePage", () => {
  it("should render without crashing", () => {
    const testHomePage = shallow(<HomePage />);

    expect(shallowToJson(testHomePage)).toMatchSnapshot();
  });
});
