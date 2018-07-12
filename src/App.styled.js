import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Item = styled.li`
    margin-right: .5rem;
    float: ${(props) => props.float ? props.float : 'left' };
`;

const Menu = styled.ul`
    margin: 0;
    padding: 0;
`;

const Bar = styled.div`
    background-color: #fff;
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
`;

const Link = styled(NavLink)`
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    display: block;
    color: #333;
    text-align: center;
    padding: 1rem;
    
    &.active {
      background-color: deepskyblue;
    }
    
   &:hover {
      background-color: deepskyblue;
   }
    
    
`;

export { Item,Menu,Bar,Link};