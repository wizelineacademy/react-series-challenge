import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  overflow: hidden;
  background-color: #333;
`;

const NavBarElement = styled(Link)`
  float: left;
  color: ${props => (props.active ? 'white' : '#f2f2f2')};
  background-color: ${props => (props.active ? '#4CAF50' : 'inherit')};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  :hover {
    background-color: #ddd;
    color: black;
  }
`;

const NavBarSearchField = styled.input`
  float: right;
  margin: 14px 16px;
  height: 14px;
  width: 200px;
  border-radius: 5px;
`;

export { NavBarContainer, NavBarElement, NavBarSearchField };
