import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainMenuStyled = styled.nav`
  display: inline-block;
  order: 1;
  flex: 0 1 auto;
  align-self: auto;
  min-width: 0;
  min-height: auto;
`;

const List = styled.ul`
  text-decoration: none;
  list-style: none;
  color: #ccc;
  font: 25px/1 Helvetica, Verdana, sans-serif;
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease;
`;

const StyledLink = styled(Link)`
  color: #ccc;
  font: 25px/1 Helvetica, Verdana, sans-serif;
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease;

  font-weight: ${props => (props.active === 'active' ? 'bold' : 'normal')};
  color: ${props => (props.active === 'active' ? 'white' : '#ccc')};

  &:hover {
    color: #666;
  }
`;

const ElementList = styled.li`
  height: 25px;
  float: left;
  margin-right: 0px;
  border-right: 1px solid #aaa;
  padding: 0 20px;

  &:last-child {
    border-right: none;
  }
`;

export { MainMenuStyled, List, ElementList, StyledLink };
