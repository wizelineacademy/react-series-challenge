import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    font-family: 'Poppins', sans-serif;
  }`


const Item = styled.li`
    margin-right: .5rem;
    float: ${(props) => props.float ? props.float : 'left' };
    color:black;
    background-color:#685FFF;
    text-decoration:none
    `;

const Menu = styled.ul`
    margin: 0;
    padding: 0;
    text-decoration:none
`;

const Bar = styled.div`
    background-color: #121212;
    color:fff;
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px 15px 12px;
    -webkit-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    -moz-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    text-decoration:none
    `;

const Link = styled(NavLink)`
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    display: block;
    color: #white;
    text-align: center;
    padding: 1rem;
    text-decoration:none
    &.active {
      background-color: white;
    }
    
   &:hover {
      background-color: deepskyblue;
      text-decoration:none
   }
   &:visited {
    background-color: deepskyblue;
    text-decoration:none
    color:white
 }

    
    
`;

export { Item,Menu,Bar,Link};