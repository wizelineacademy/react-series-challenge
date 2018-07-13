import React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from '../../components/ErrorBoundary';

describe('Error boundary', () => {
  
  it('Component renders without errors', () => {
    let comp = mount(<ErrorBoundary><div className="inside-eb"></div></ErrorBoundary>);
    expect(comp.state('hasError')).toBeFalsy();
    expect(comp.find('.inside-eb')).toHaveLength(1);
  });

  it('Component doesn\'t render children on error', () => {
    let comp = mount(<ErrorBoundary><div className="inside-eb"></div></ErrorBoundary>);
    comp.setState({hasError: true});
    expect(comp.find('.inside-eb')).toHaveLength(0);
  });

  it('Component catches the error', () => {
    const ErrorDiv = () => {
      throw new Error; 
      return <div/>;
    }
    let comp = mount(<ErrorBoundary><ErrorDiv /></ErrorBoundary>);
    expect(comp.state('hasError')).toBeTruthy();
    expect(comp.find('.inside-eb')).toHaveLength(0);
  });

});