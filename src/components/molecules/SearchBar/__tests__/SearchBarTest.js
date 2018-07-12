import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import SearchBar from "../index";

describe("SearchBar", () => {
  it("should render without crashing", () => {
    const testSearchBar = shallow(<SearchBar />);

    expect(shallowToJson(testSearchBar)).toMatchSnapshot();
  });
});
