import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import { searchGifsChangeQuery } from '../actions/search';
import { getQuery } from '../selectors/search';

const StyledTopBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.searchBar};
  box-shadow: 0px 10px 40px -15px rgba(0,0,0,0.75);
  z-index: ${({ theme }) => theme.zMap.searchBar};
`;

const StyledTopBarContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.p`
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  text-shadow: -1px 0px 2px rgba(20, 20, 20, 1);
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledSearchInput = styled.input`
  border: 5px solid ${({ theme }) => theme.colors.background};
  border-radius: 6px;
`;

const StyledLink = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  text-shadow: -1px 0px 2px rgba(20, 20, 20, 1);

  &.active {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: -1px 2px 6px 0px rgba(0,0,0,0.75);
  }
`;

const StyledLogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${StyledLink} {
    margin-left: 30px;
  }
`;

export const SearchBar = ({ query, searchGifsChangeQuery }) => (
  <StyledTopBar>
    <StyledTopBarContent>
      <StyledLogoContainer>
        <StyledLogo>Giffr</StyledLogo>
        <StyledLink exact to="/">🏠</StyledLink>
        <StyledLink to="/favorites">⭐️</StyledLink>
      </StyledLogoContainer>
      <StyledSearchInput
        placeholder="search gifs"
        type="text"
        value={query}
        onChange={event => searchGifsChangeQuery(event.target.value)}
      />
    </StyledTopBarContent>
  </StyledTopBar>
);

const mapStateToProps = (state) => ({
  query: getQuery(state)
});

const mapDispatchToProps = {
  searchGifsChangeQuery
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
