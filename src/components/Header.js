import React from 'react'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
}

const ulStyle = {
  padding: '0 6rem',
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  border: '2px solid #1e1e1e',
  justifyContent: 'space-around',
  background: 'linear-gradient(#333333 5%, black 55%)',
  height: '50px',
  width: '100%',
}

const liStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: '100%',
  height: '100%',
}

const linkStyle = {
  color: 'white',
  fontSize: '20px',
  width: '100%',
  textAlign: 'center',
}

const dividerStyle = {
  borderWidth: '1px',
  borderColor: '#e1e1e11f',
}

const Header = () => {
  return (
    <nav style={navStyle}>
      <ul className="ulHeader" style={ulStyle}>
        <li className="liHeader" style={liStyle}>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <Divider orientation="vertical" sx={dividerStyle} />
        <li className="liHeader" style={liStyle}>
          <Link style={linkStyle} to="/hero">
            Personagens
          </Link>
        </li>
        <Divider orientation="vertical" sx={dividerStyle} />
        <li className="liHeader" style={liStyle}>
          <Link style={linkStyle} to="/About">
            Info
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
