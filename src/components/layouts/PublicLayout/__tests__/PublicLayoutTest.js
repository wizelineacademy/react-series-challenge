import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import PublicLayout from "../index";

describe("PublicLayout", () => {
  it("should render without crashing", () => {
    const testPublicLayout = shallow(<PublicLayout />);

    expect(shallowToJson(testPublicLayout)).toMatchSnapshot();
  });
});
