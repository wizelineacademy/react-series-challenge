import React from 'react'
import { func, string } from 'prop-types'

const SearchBar = ({ onChange, onSubmit, value }) => (
  <div>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} type='text' name='search' />
      <button type='submit' >Search</button>
    </form>
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
