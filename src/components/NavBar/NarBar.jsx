import React from 'react';
import PropTypes from 'prop-types';
import { NavBarContainer, NavBarElement, NavBarSearchField } from './NavBar.style';

const NavBar = ({ links, ...props }) => (
  <NavBarContainer>
    {
      links.map(link => (
        <NavBarElement key={link.url} active={link.isActive} to={link.url} href={link.url}>
          {link.text}
        </NavBarElement>
      ))
    }
    <NavBarSearchField {...props} />
  </NavBarContainer>
);

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    isActive: PropTypes.bool,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.text,
  })).isRequired,
};

export default NavBar;
