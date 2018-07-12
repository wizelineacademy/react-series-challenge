import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const DivApp = styled.div`
    text-align: center;
`;

export const AppHeader = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

export const AppTitle = styled.h1`
    font-size: 1.5em;
`;

export const ImgLogo = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
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
