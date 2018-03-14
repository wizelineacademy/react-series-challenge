import React from 'react';
import { Row, Col } from '../../Grid/styles';

describe('<Grid />', () => {
  it('Row Iem renders with one Col with full size', () => {
    const wrapper = mount(
      <Row>
        <Col span={12} />
      </Row>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Row Iem renders with two Cols with half size', () => {
    const wrapper = mount(
      <Row>
        <Col span={6} />
        <Col span={6} />
      </Row>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
