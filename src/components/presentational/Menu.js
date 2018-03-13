import React from 'react';
import MenuItemList from './MenuItemList';
import styled from 'styled-components';

const ItemContainer = styled.div`
  margin: 0;
  padding: 0;
  white-space: nowrap;
`;

const Menu = ({ items }) => (
  <ItemContainer>
    <MenuItemList items={items} />
  </ItemContainer>
);

export default Menu;
