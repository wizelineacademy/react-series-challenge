import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Header from "../index";

describe("Header", () => {
  it("should render without crashing", () => {
    const testHeader = shallow(<Header />);

    expect(shallowToJson(testHeader)).toMatchSnapshot();
  });
});
