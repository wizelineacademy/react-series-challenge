import '../localStorageMock';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';


describe('Component: App', () => {
  it('will load correctly', () => {
    const component = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
