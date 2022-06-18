import React, { useState, useEffect } from 'react'
import Routes from './services/routes'
import gifLoading from './img/marvel-avengers.gif'

import { Box } from '@mui/material'
import './App.css'

const BoxStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const imgStyle = {
  opacity: 0.8,
}

const App = () => {
  const [isChangeGif, setIsChangeGif] = useState(true)

  useEffect(() => {
    if (isChangeGif) {
      setTimeout(() => {
        setIsChangeGif(false)
      }, 1500)
    }
  }, [isChangeGif])

  return (
    <>
      {!isChangeGif ? (
        <Routes />
      ) : (
        <Box style={BoxStyle}>
          <img style={imgStyle} height="500" src={gifLoading} />
        </Box>
      )}
    </>
  )
}

export default App
