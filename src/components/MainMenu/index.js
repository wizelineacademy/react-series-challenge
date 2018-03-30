import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { MainMenuStyled, List, ElementList, StyledLink } from './MainMenuStyles';

class MainMenu extends Component {
  render() {
    const { menuData, match: { path } } = this.props;
    return (
      <MainMenuStyled>
        <List>
          {menuData.map((link, key) => (
            <ElementList key={key}>
              <StyledLink to={link.path} active={path === link.path ? 'active' : ''}>
                {link.section}
              </StyledLink>
            </ElementList>
          ))}
        </List>
      </MainMenuStyled>
    );
  }
}

MainMenu.propTypes = {
  menuData: PropTypes.array.isRequired
};

export default MainMenu;
