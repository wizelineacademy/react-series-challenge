import React from 'react'
import {
  Searchbar,
  Input,
} from './Searchbar.styled'

const SearchbarComp = ({ handleKeyPress, handleChange }) => {

  return (
    <Searchbar>
      <Input type="text"
        placeholder="What are you looking for..."
        onKeyPress={handleKeyPress ? e => handleKeyPress(e) : null}
        onChange={handleChange ? e => handleChange(e) : null}/>
    </Searchbar>
  )
}

export default SearchbarComp
