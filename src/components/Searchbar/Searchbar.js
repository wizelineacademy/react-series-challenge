import React from 'react'
import './Searchbar.css'

const Searchbar = ({ handleKeyPress, handleChange }) => {

  return (
    <div className="searchbar">
      <input type="text"
        onKeyPress={handleKeyPress ? e => handleKeyPress(e) : null}
        onChange={handleChange ? e => handleChange(e) : null}/>
    </div>
  )
}

export default Searchbar
