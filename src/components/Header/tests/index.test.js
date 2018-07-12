import React from 'react';
import { shallow } from 'enzyme';
import { Header, HeaderTitle, HeaderNav, HeaderNavLink } from '../index';
import { theme } from '../../../App';

describe('Header styled components with a theme provider object', () => {
  it('should associated the styled component hash to Header, to style the component', () => {
    const component = shallow(<Header theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it('should associated the styled component hash to HeaderTitle, to style the component', () => {
    const component = shallow(<HeaderTitle theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it('should associated the styled component hash to HeaderNav, to style the component', () => {
    const component = shallow(<HeaderNav theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it('should associated the styled component hash to HeaderNavLink, to style the component', () => {
    const component = shallow(<HeaderNavLink to="/favorites" theme={theme} />);
    expect(component).toMatchSnapshot();
  });
});
