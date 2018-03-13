import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ImagePlaceholder from "../";

describe("<ImagePlaceholder />", () => {
  it("renders properly", () => {
    const tree = renderer.create(<ImagePlaceholder index={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
