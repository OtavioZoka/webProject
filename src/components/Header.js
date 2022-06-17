import React from 'react'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import { useHistory } from 'react-router-dom'
import marvelLogo from '../img/new-logo-marvel.jpeg'

const ButtonStyle = {
  background: `url(${marvelLogo}) center center / contain no-repeat`,
  border: 'none',
  position: 'absolute',
  left: '0',
  backgroundColor: 'white',
  borderBottom: '10px solid white',
  borderTop: '10px solid white',
  display: 'none',
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
}

const ulStyle = {
  height: '40px',
  width: '100%',
  padding: '0 6rem',
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  border: '2px solid #1e1e1e',
  justifyContent: '<space-around></space-around>',
  background: 'linear-gradient(#333333 5%, black 55%)',
}

const linkStyle = {
  color: 'white',
  fontSize: '20px',
  margin: '16px 24px',
}

const dividerStyle = {
  borderWidth: '1px',
  borderColor: '#e1e1e11f',
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
        <Divider orientation="vertical" sx={dividerStyle} />
        <li>
          <Link style={linkStyle} to="/hero">
            Personagens
          </Link>
        </li>
        <Divider orientation="vertical" sx={dividerStyle} />
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
