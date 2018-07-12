import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import FavsPage from "../index";

describe("FavsPage", () => {
  it("should render without crashing", () => {
    const testFavsPage = shallow(<FavsPage />);

    expect(shallowToJson(testFavsPage)).toMatchSnapshot();
  });
});
