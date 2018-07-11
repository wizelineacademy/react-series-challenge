import React from 'react';
import { mount } from 'enzyme';
import GifErrorBoundary from '../index';

describe('GifErrorBoundary', () => {
  it('should render a paragraph tag with a message when a child component throws an error', () => {
    const Child = () => {
      throw new Error('Fixed error');
    };

    const component = mount(
      <GifErrorBoundary>
        <Child />
      </GifErrorBoundary>
    );
    expect(component.find('.error-boundary-message')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  it('should render the children component if everything was ok', () => {
    const Child = () => <h1 className="its-ok">Everthing ok!</h1>;
    const component = mount(
      <GifErrorBoundary>
        <Child />
      </GifErrorBoundary>
    );

    expect(component.find('.its-ok')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});
