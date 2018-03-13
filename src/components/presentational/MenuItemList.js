import React from 'react';
import MenuItem from './MenuItem';

const MenuItemList = ({ items }) => (
  items.map((item, index) => (
    <MenuItem key={item.route} section={item}/>
  ))
);

export default MenuItemList;
