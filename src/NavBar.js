import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from './Grid.styled';
import logo from './logo.svg';
import searchIcon from './search.svg'
import { Link, NavLink } from 'react-router-dom';

const Header = styled.header`
  background-color: #20232a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`;

const LogoText = styled.span`
  display: inline-block;
  color: #61dafb;
  vertical-align: middle;
  margin-top: -38%;
`;

const NavLinks = styled.nav`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const NavTab = styled(NavLink)`
  text-align: center;
  line-height: 3.3rem;
  padding-right: 1rem;
  padding-left: 1rem;
  text-decoration: none;
  color: #fff;
`;

const activeNavLinkStyle = {
  borderBottom: '2px solid #61dafb',
  color: '#61dafb',
}

const SearchInput = styled.input`
  width: 100%;
  background-image: url(${searchIcon});
  background-position-y: center;
  background-position-x: 5px;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  padding: 0.5rem 0.5rem 0.5rem 1.8rem;
  background-color: transparent;
  font-size: 16px;
  border: none;
  border-radius: 1rem;
  height: 1.5rem;
  color: #fff;
  &:focus {
    outline: none;
    background-color: rgba(132, 132, 132, 0.2);
  }
`;

class NavBar extends Component {
  render() {
    return (
      <Header>
        <Container>
          <Row>
            <Link to="/">
              <LogoImage src={logo} alt="logo" />
              <LogoText> GifApp </LogoText>
            </Link>
            <Col>
              <NavLinks>
                <NavTab exact to="/" activeStyle={activeNavLinkStyle}>
                  Home
              </NavTab>
                <NavTab to="/favorites" activeStyle={activeNavLinkStyle}>
                  Favorites
              </NavTab>
              </NavLinks>
            </Col>
            <Col size="3">
              <form>
                <SearchInput name="search" placeholder="Look for a GIF" />
              </form>
            </Col>
          </Row>
        </Container>
      </Header>
    );
  }
}

export default NavBar;