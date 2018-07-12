import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import GiPanel from "../index";

describe("GiPanel", () => {
  it("should render without crashing", () => {
    const testGiPanel = shallow(<GiPanel />);

    expect(shallowToJson(testGiPanel)).toMatchSnapshot();
  });
});
