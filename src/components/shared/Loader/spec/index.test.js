import React from "react";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import "jest-styled-components";

import Loader from "../";

ReactDOM.createPortal = node => node;

describe("<Loader />", () => {
  it("renders properly", () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
