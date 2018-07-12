import React, { Component } from 'react';
import { Container, Row, Col } from './Grid.styled';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Header, LogoImage, LogoText, NavLinks, NavTab, SearchInput } from './NavBar.styled';

const activeNavLinkStyle = {
  borderBottom: '2px solid #61dafb',
  color: '#61dafb',
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' }
  }

  render() {
    return (
      <Header>
        <Container>
          <Row>
            <Link to="/">
              <LogoImage src={logo} alt="logo" />
              <LogoText> GIFApp </LogoText>
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
              <form onSubmit={(e) => { e.preventDefault(); this.handleSearchFormSubmit() }}>
                <SearchInput
                  name="search"
                  placeholder="Look for a GIF"
                  onChange={this.createValueUpdater('search')}
                  value={this.state.search}
                />
              </form>
            </Col>
          </Row>
        </Container>
      </Header>
    );
  }

  createValueUpdater = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  }

  handleSearchFormSubmit = () => {
    this.props.onSearch && this.props.onSearch(this.state.search);
  }
}

export default NavBar;