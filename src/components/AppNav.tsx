import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../routes';
import styled from 'styled-components';
import Search from './Search';

const _nav = styled.nav`
    border-bottom: 1px solid #FC4349;
    margin-bottom: 1em;
    color: #6DBCDB;
    font-weight: bold;

    ul {
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        height: 3.5em;
    }

    li { flex: 1; }

    a {
        text-decoration: none;
        color: inherit;
        padding: 1em;
    }

    .active { color: #FC4349 }
    .search-bar { flex: 1; }
`;

const LINKS = ROUTES.map(({path, content}) =>
    <li key={path}><NavLink  activeClassName="active" to={path}>{content}</NavLink></li>);

class AppNav extends React.Component {
    public render() {
        return (<_nav>
            <ul>
                {LINKS}
                <li className='search-bar'><Search /></li>
            </ul>
        </_nav>);
    }
}

export default AppNav;
