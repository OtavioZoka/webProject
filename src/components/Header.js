import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import marvelLogo from '../img/marvel-logo.png'

const ButtonStyle = {
  background: `url(${marvelLogo}) center center / contain no-repeat`,
  border: 'none',
  position: 'absolute',
}

const navStyle = {
  display: 'flex',
}

const ulStyle = {
  height: '40px',
  width: '55%',
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  border: '2px solid #1e1e1e',
  justifyContent: 'flex-start',
  background: 'linear-gradient(#333333 5%, black 55%)',
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
      <button
        className="buttonLogo"
        style={ButtonStyle}
        onClick={routeChange}
      ></button>
      <ul className="ulHeader" style={ulStyle}>
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
