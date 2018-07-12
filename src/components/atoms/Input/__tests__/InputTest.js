import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import Input from "../index";

describe("Input", () => {
  it("should render without crashing", () => {
    const testInputItem = shallow(
      <Input
        type="input"
        id="0"
        name="nombre"
        placeholder="nombre"
        label="label"
        getInputValue="test"
      />
    );

    expect(shallowToJson(testInputItem)).toMatchSnapshot();
  });
});
