import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hero">Personagens</Link>
        </li>
        <li>
          <Link to="/About">Info</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
