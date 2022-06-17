import React from 'react'
import Header from '../components/Header'
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import marvelIco from '../img/marvel.ico'

const BoxStyle = {
  boxShadow: 24,
  padding: '24px',
  background: 'white',
  border: '2px solid #e23636',
}

const BoxImgStyle = {
  boxShadow:
    '0px -15px 8px -10px rgb(0 0 0 / 25%), 0px -15px 8px -10px rgb(0 0 0 / 25%),0px -15px 8px -10px rgb(0 0 0 / 25%)',
  margin: '0 auto',
  marginTop: '-200px',
  marginBottom: '100px',
  padding: '24px 72px',
  background: 'white',
  width: '450px',
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
    <>
      <Header />
      <div className="container">
        <header className="center">
          <h1>About</h1>
        </header>
        <Box sx={BoxStyle}>
          <Box sx={BoxImgStyle}>
            <CardMedia sx={CardMediaStyle} component="img" image={marvelIco} />
            <Typography sx={Typ1Style}>Legado Marvel Company</Typography>
            <Typography sx={Typ2Style}>
              Seus personagens preferidos num so lugar
            </Typography>
          </Box>
          <Typography sx={Typ3Style}>Lista de membros do grupo</Typography>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>Otavio </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>Edinei</ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>Murilo</ListItemText>
          </ListItem>
        </Box>
      </div>
    </>
  )
}

export default About
