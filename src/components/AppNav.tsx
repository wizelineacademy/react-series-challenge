import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../routes';
import styled from 'styled-components';
import Search from './Search';

const _nav = styled.nav`
    padding: 16px 0;
    background-color: #2C3E50;

    ul {
        display: flex;
        justify-content: space-around;
    }

    a { text-decoration: none; color: #FFF; }

    .active {
        font-weight: bold;
        color: #FC4349;
    }
`;

const LINKS = ROUTES.map(({path, content}) =>
    <li key={path}><NavLink  activeClassName="active" to={path}>{content}</NavLink></li>);
class AppNav extends React.Component {
    public render() {
        return (<_nav>
            <ul>
                {LINKS}
                <Search />
            </ul>
        </_nav>);
    }
}

export default AppNav;
