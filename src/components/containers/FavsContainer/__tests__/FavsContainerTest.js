import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { FavsContainer } from "../index";

describe("FavsContainer", () => {
  it("should render without crashing", () => {
    const testFavsContainer = shallow(<FavsContainer />);

    expect(shallowToJson(testFavsContainer)).toMatchSnapshot();
  });
});
