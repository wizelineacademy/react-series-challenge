import React from 'react'
import './Searchbar.css'

const Searchbar = ({ handleKeyPress }) => {

  return (
    <div className="searchbar">
      <input type="text" onKeyPress={e =>handleKeyPress(e)}/>
    </div>
  )
}

export default Searchbar
