import React from 'react'
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import Header from '../components/Header'
import marvelIco from '../img/new-logo-marvel.jpeg'

const Typ1Style = {
  color: 'black',
  fontWeight: 'bold',
  padding: '0 0 4px 0',
  fontSize: '16px',
}
const Typ2Style = {
  color: 'gray',
  padding: '0',
  fontSize: '14px',
}
const Typ3Style = {
  color: 'purple',
  fontWeight: 'bold',
  padding: '0 18px ',
}

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <header className="center">
          <h1>Info</h1>
        </header>
        <Box className="BoxStyle">
          <Box className="BoxImgStyle" id="boxImg">
            <CardMedia
              className="CardMediaStyle"
              component="img"
              image={marvelIco}
            />
            <Typography sx={Typ1Style}>Legado Marvel Company</Typography>
            <Typography sx={Typ2Style}>
              Seus personagens preferidos num so lugar
            </Typography>
          </Box>
          <Box className="BoxTextStyle">
            <Typography sx={Typ3Style}>Lista de membros do grupo</Typography>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>Arthur Andrade Rosa – 119118540</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>Bruno Conrado da Silva – 12114539</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>Daniel Avelino de Paula – 1221116214</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>Ednei Rosa Ferreira – 120112951</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>Murilo Drumond – 118116548</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>Otávio Reis Viana – 11815319</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>
                Wagner Artur Paulino Jamar - 119213656
              </ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0, color: 'black' }}>
              <ListItemText>Wilkerman Viana Lopes - 11722353</ListItemText>
            </ListItem>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default About
