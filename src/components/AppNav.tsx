import * as React from 'react';
import ROUTES from '../routes';
import Search from './Search';

import { StyledNav, NavLink } from './AppNav.style'

const LINKS = ROUTES.map(({path, content}) =>
    <li key={path}><NavLink to={path}>{content}</NavLink></li>);

class AppNav extends React.Component {
    public render() {
        return (<StyledNav>
            <ul>
                {LINKS}
                <li><Search /></li>
            </ul>
        </StyledNav>);
    }
}

export default AppNav;
