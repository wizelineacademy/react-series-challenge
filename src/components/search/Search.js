import React from 'react';
import { Search } from './Search.style';

export default ({ searchAction }) => {
  return (
    <Search
      placeholder="Search..."
      onKeyPress={event => {
        if (event.key === 'Enter') {
          const query = event.target.value;
          searchAction({ query });
        }
      }}
    />
  );
};
