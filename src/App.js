import React, { useState, useEffect } from 'react'
import Routes from './services/routes'
import gifLoading from './img/marvel-avengers.gif'

import { Box } from '@mui/material'
import Header from './components/Header'
import './App.css'

const BoxStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const App = () => {
  const [isClickHandleGif, setIsClickHandleGif] = useState(false)
  const [isChangeGif, setIsChangeGif] = useState(true)

  useEffect(() => {
    if (isChangeGif) {
      setTimeout(() => {
        setIsChangeGif(false)
      }, 1500)
    }
    if (isClickHandleGif) {
      setIsChangeGif(isClickHandleGif)
      setTimeout(() => {
        setIsChangeGif(false)
      }, 500)
      setIsClickHandleGif(false)
    }
  }, [isChangeGif, isClickHandleGif])

  return (
    <>
      <Header isChangeGif={setIsClickHandleGif} />
      {!isChangeGif ? (
        <Routes />
      ) : (
        <Box style={BoxStyle}>
          <img height="250" src={gifLoading} />
        </Box>
      )}
    </>
  )
}

export default App
