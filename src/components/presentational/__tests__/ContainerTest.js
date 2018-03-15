import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import Container from '../Container';

describe('Container', () => {
  it('should render without crashing', () => {
    const testContainer = shallow(
      <Container title="test">
        <span>Test</span>
      </Container>
    );    

    expect(shallowToJson(testContainer)).toMatchSnapshot()
  })
})


