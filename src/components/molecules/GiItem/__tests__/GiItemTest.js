import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import GiItem from "../index";
import giphyMock from "./mocks/data.json";

describe("GiItem", () => {
  it("should render without crashing", () => {
    const testGiItem = shallow(<GiItem giphy={giphyMock.data} />);

    expect(shallowToJson(testGiItem)).toMatchSnapshot();
  });
});
