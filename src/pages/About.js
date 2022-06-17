import React from 'react'
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import marvelIco from '../img/new-logo-marvel.jpeg'

const BoxStyle = {
  boxShadow: 24,
  padding: '40px 18rem',
  background: 'white',
  border: '2px solid #e23636',
}

const BoxImgStyle = {
  boxShadow:
    '0px -15px 8px -10px rgb(0 0 0 / 25%), 0px -15px 8px -10px rgb(0 0 0 / 25%),0px -15px 8px -10px rgb(0 0 0 / 25%)',
  borderTop: '2px solid #e23636',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderImage: 'linear-gradient(to bottom, #e23636, transparent ) 5 40%',
  margin: '0 auto',
  marginTop: '-216px',
  marginBottom: '32px',
  padding: '24px 72px',
  background: 'white',
  width: '450px',
  position: 'relative',
}

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

const CardMediaStyle = {
  objectFit: 'contain',
  height: '250px',
  width: '250px',
  margin: '0 auto',
}

const About = () => {
  return (
    <div className="container">
      <header className="center">
        <h1>Info</h1>
      </header>
      <Box sx={BoxStyle}>
        <Box sx={BoxImgStyle} id="boxImg">
          <CardMedia sx={CardMediaStyle} component="img" image={marvelIco} />
          <Typography sx={Typ1Style}>Legado Marvel Company</Typography>
          <Typography sx={Typ2Style}>
            Seus personagens preferidos num so lugar
          </Typography>
        </Box>
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
          <ListItemText>Wagner Artur Paulino Jamar - 119213656</ListItemText>
        </ListItem>
        <ListItem sx={{ pb: 0, color: 'black' }}>
          <ListItemText>Wilkerman Viana Lopes - 11722353</ListItemText>
        </ListItem>
      </Box>
    </div>
  )
}

export default About
