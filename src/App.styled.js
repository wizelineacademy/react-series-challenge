import styled, {injectGlobal} from 'styled-components';
import {NavLink} from 'react-router-dom';

injectGlobal`
    @font-face {
        font-family: monospace;
    }
`;

export const LaLista = styled.ul`
    font-family:'Trebuchet MS';
    font-size:17px;
    list-style:none;
    margin-top:20px;
    text-align:center;
`;

export const UnaVineta = styled.li`
    margin: 0.25em 0.5em;
    padding: 0.25em 0.5em;
    display:inline;
    position:relative;
`;

export const StyledNavLink = styled(NavLink)`
    border: 4px solid ${props => (props.miidx % 2) === 0 ? 'blue' : 'green'};
    margin: 0.25em 0.5em;
    padding: 0.25em 0.5em;
    display:inline;
    position:relative;
    background-color: palevioletred;

    :hover {
        background-color: ${props => (props.miidx % 2) === 0 ? 'blue' : 'green'};
        color: white;
    }
`;
