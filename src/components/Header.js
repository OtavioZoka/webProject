import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import marvelLogo from '../img/marvel-logo.png'

const ButtonStyle = {
  width: '250px',
  height: '100px',
  background: `url(${marvelLogo}) center center / contain no-repeat`,
  border: 'none',
}

const navStyle = {
  display: 'flex',
}

const ulStyle = {
  height: '40px',
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  justifyContent: 'center',
}
const linkStyle = {
  color: 'white',
  fontSize: '20px',
  margin: '16px 24px',
}

const Header = () => {
  const history = useHistory()
  const routeChange = () => {
    let path = `/`
    history.push(path)
  }

  return (
    <nav style={navStyle}>
      <button style={ButtonStyle} onClick={routeChange}></button>
      <ul style={ulStyle}>
        <li>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/hero">
            Personagens
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/About">
            Info
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
