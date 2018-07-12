import React from "react";
import { shallow } from "enzyme";
import AppMain from "../AppMain.js";

describe("AppMain", () => {
  it("should render the AppMain", () => {
    const component = shallow(<AppMain />);
    expect(component).toMatchSnapshot();
  });
});
