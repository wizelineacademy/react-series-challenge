import styled from 'styled-components';

export const Menu = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const MenuItem = styled.li`
  display: inline-block;
  color: #CCC;
  a.active {
    color: #ff8c00;
  }
`;