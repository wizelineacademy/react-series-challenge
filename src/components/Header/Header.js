import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {

  return(
    <div className="header">
      <div className="title">
        Header
      </div>
      <div className="nav">
        <Link className="item" to="/">
          HOME
        </Link>
        <Link className="item" to="/favorites">
          FAVORITES
        </Link>
      </div>
    </div>
  )

}

export default Header
