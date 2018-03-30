import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CustomNavLink = styled(NavLink).attrs({
  activeStyle: {
    color: 'white',
    fontWeight: 'bold'
  }
})`
  color: white;
  font-weight: normal;
  text-decoration: none;

  :visited {
    color: lightgray;
  }
`;

export default CustomNavLink;
