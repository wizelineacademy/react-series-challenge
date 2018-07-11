import React from 'react';
import { shallow } from 'enzyme';
import Navbar from "../../components/Navbar";

it('App renders correctly', () => {
    shallow(<Navbar />);
  });

  it("responds to name change", done => {
    const handleChangeSpy = sinon.spy(Navbar.prototype, "handleChange");
    const event = {target: {name: "search", value: "spam"}};
    const wrap = mount(
      <Navbar />
    );
    wrap.ref('search').simulate('change', event);
    expect(handleChangeSpy.calledOnce).to.equal(true);
  })