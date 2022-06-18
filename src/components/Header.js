import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Divider } from '@mui/material'

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
  const history = useHistory()

  const routeChange = (value) => {
    let path = `${value}`
    history.push(path)
  }

  return (
    <nav>
      <ul className="ulHeader">
        <li className="liHeader" style={liStyle}>
          <Button style={linkStyle} onClick={() => routeChange('/')}>
            Home
          </Button>
        </li>
        <Divider orientation="vertical" sx={dividerStyle} />
        <li className="liHeader" style={liStyle}>
          <Button style={linkStyle} onClick={() => routeChange('/hero')}>
            Personagens
          </Button>
        </li>
        <Divider orientation="vertical" sx={dividerStyle} />
        <li className="liHeader" style={liStyle}>
          <Button style={linkStyle} onClick={() => routeChange('/about')}>
            Info
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
