import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/presentational/Header';

it('renders without crashing', () => {
  shallow(<Header />);
});
