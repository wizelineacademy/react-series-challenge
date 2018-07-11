import { NavLink } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

export const NavBar = styled.div`
background-color: #333;
overflow: hidden;
`;

export const HeadLink = styled(NavLink)`
float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
`;

injectGlobal`
body {
margin: 0;
padding: 0;
}

a.active{
font-weight: bolder;
}
`;