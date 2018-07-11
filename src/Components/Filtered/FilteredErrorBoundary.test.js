/* leave first line blank for cq */
import FilteredErrorBoundary from "./FilteredErrorBoundary";
import React from "react";
import { shallow } from "enzyme";

describe("Filtered Error Boundary", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FilteredErrorBoundary>
        <div />
      </FilteredErrorBoundary>
    );
  });

  it("should render component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
