import styled from 'styled-components';
import { Link, } from 'react-router-dom';

export const Navbar = styled.header`
    background-color: #f9f9f9;
    border-bottom: 2px solid #acacac;
    margin-bottom: 20px;
    position: relative;
    z-index: 200;
    width: 100%;
    float: left;
`;

export const NavbarContainer = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
`;

export const NavbarLi = styled.div`
    float: left;
    position: relative;
    display: block;
    list-style: none;
`;

export const NavbarLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    border-bottom: ${props => props.active ? '2px solid;' : '0px;'}
`;

export const AppBody = styled.div`
    margin: 10px;
`;

export const ContainerInputText = styled.div`
    margin-bottom: 10px;
`;

export const InputText = styled.input`
    width: 55%;
    height: 30px;
    padding: 2px 8px;   
`;

export const H4 = styled.h4`
    text-align: center;
`;