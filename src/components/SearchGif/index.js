import React from 'react';
import { Input } from '../../styledComponents';

const SearchGif = ({
  handleSearch
}) => {
  return (
    <Input
      type="text"
      onKeyPress={handleSearch}
    />
  );
}

export default SearchGif;
