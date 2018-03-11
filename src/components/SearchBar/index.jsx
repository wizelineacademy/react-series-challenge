import React from 'react'
import { func, string } from 'prop-types'

const SearchBar = ({ onChange, value }) => (
  <input onChange={onChange} value={value} type='text' />
)

SearchBar.propTypes = {
  onChange: func.isRequired,
  value: string
}
SearchBar.defaultProps = {
  value: ''
}
export default SearchBar
