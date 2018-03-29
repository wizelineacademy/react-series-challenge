import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Header from "./Header";
import {MemoryRouter} from "react-router-dom";

describe('Header component', () => {
  it('should render correctly', () => {
    const output = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    );
    expect(renderToJson(output)).toMatchSnapshot();
  });
});