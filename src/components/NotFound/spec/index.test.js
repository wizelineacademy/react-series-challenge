import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import NotFound from "../";

describe("<NotFound />", () => {
  it("renders properly", () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
