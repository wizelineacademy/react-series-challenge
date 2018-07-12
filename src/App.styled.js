import styled, { injectGlobal } from 'styled-components'
import { NavLink } from 'react-router-dom';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Chela+One');
  @font-face {
      font-family: 'Chela One', cursive;
  }
  
  * {
      font-family: 'Chela One', cursive;
  }

  html, body {
    margin: 0;
  }
`;

const Navbar = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 16px 15px 12px;
    -webkit-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    -moz-box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
    box-shadow: 0px 4px 25px -10px rgba(66,66,66,1);
`;

const NavMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
`;

const NavItem = styled.li`
    margin-right: .5rem;
    float: ${(props) => props.float ? props.float : 'left' };
`;

const Link = styled(NavLink)`
    display: block;
    color: #333;
    text-align: center;
    padding: 1rem;
    text-decoration: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    
    
   &:hover {
      color: #fff;
      background-color: #E93D44;
   }
    
    &.active {
      color: #fff;
      background-color: #C6343A;
    }
`;

const MainContainer = styled.div`
    margin-top: 8rem;
    width: 100%;
    background-color: #fff;
    padding: 0 1rem 1rem;
`;

const LogoContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
`;

export {
    Navbar,
    NavMenu,
    NavItem,
    Link,
    MainContainer,
    LogoContainer,
};