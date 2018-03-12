import React from 'react'
import { func, string } from 'prop-types'
import Icon from 'react-icons-kit'
import { search } from 'react-icons-kit/icomoon/search'

import { StyledInput, StyledForm } from './SearchBar.style'

const SearchBar = ({ onChange, onSubmit, value }) => (
  <div>
    <StyledForm onSubmit={onSubmit}>
      <StyledInput onChange={onChange} value={value} type='text' name='search' />
      <button type='submit' ><Icon icon={search} /></button>
    </StyledForm>
  </div>
)

SearchBar.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  value: string
}
SearchBar.defaultProps = {
  value: ''
}
export default SearchBar
