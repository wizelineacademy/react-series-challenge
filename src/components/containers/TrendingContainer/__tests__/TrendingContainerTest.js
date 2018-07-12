import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { TrendingContainer } from "../index";
import giphyMock from "./mocks/data.json";

describe("TrendingContainer", () => {
  it("should render without crashing without giphys", () => {
    const testTrendingContainer = shallow(<TrendingContainer />);

    expect(shallowToJson(testTrendingContainer)).toMatchSnapshot();
  });

  it("should render without crashing with giphys", () => {
    const testTrendingGiphys = shallow(
      <TrendingContainer
        selectedFavs={() => {
          return;
        }}
        data={[giphyMock]}
      />
    );

    expect(shallowToJson(testTrendingGiphys)).toMatchSnapshot();
  });
});
