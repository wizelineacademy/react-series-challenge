import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: rgb(80, 80, 80);
  color: white;
  padding: 15px;
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
`

export const HeaderLogo = styled.img`
  height: 4em;
`

export const HeaderNavItems = styled.div`
  margin-left: 1.5em;

  & > a {
    color: white;
    opacity: 0.8;
    text-decoration: none;

    &.active {
      opacity: 0.99;
    }

    &:hover {
      opacity: 0.99;
    }
  }
`
