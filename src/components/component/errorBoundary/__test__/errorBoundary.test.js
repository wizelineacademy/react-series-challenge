import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from "sinon";

import ErrorBoundary from "./../index";

describe('<ErrorBoundary> ', () => {

  let wrapper;

  const ErrorComponent = ({thow}) => {
    if(thow) throw new Error('hello');
    return (<div> NOT GETTING HERE ... =( </div>);
  }


  it('Will check with the snaptshot ', () => {
    wrapper = shallow(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );
    expect(toJson(wrapper.dive())).toMatchSnapshot();
  });

  it('Will check with the snaptshot when Error happen', () => {
    wrapper = mount(
      <ErrorBoundary>
        <ErrorComponent throw />
      </ErrorBoundary>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
