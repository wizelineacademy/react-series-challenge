import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {BrowserRouter as Router} from 'react-router-dom';

import DetailsViewStyled from '../components/DetailsView/DetailsViewStyled';

describe('DetailsViewStyled', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <DetailsViewStyled/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should simulate click', () => {
    const output = shallow(
      <Router>
        <DetailsViewStyled/>
      </Router>
    );
    output.simulate('click');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render correctly with custom sizes', () => {
    const output = shallow(
      <DetailsViewStyled width={200} height={200}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
