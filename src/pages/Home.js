import React from 'react'
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import Header from '../components/Header'

const BoxStyle = {
  boxShadow: 24,
  padding: '40px',
  background: 'white',
  border: '2px solid #e23636',
}
const Typ3Style = {
  color: 'purple',
  fontWeight: 'bold',
  padding: '0 18px ',
}

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <header className="center">
          <h1>Marvel</h1>
        </header>
        <Box sx={BoxStyle}>
          <Typography sx={Typ3Style}>Uma breve historia da Marvel</Typography>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 30 - 40 - A Editora Timely lança a revista Marvel Comics, que
              traz o andróide Tocha Humana e Namor, um príncipe subaquático que
              odiava humanos. O sucesso da revista dá origem <br></br>a dezenas
              de heróis, como o Capitão América.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 50 - As vendas caem e a editora, que agora se chama Atlas,
              quase vai à falência. Os heróis clássicos Namor, o Capitão América
              e Tocha Humana, esquecidos desde o fim da guerra, <br></br>ganham
              revistas novas para combater o inimigo da vez dos americanos: os
              comunistas.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 60: A estreia da revista Quarteto Fantástico marca o início
              de uma explosão criativa na editora, agora sim chamada Marvel.
              Surge nessa década a maioria dos super-heróis Marvel de<br></br>{' '}
              hoje. A fórmula de seres superpoderosos com os problemas de uma
              pessoa comum é um sucesso instantâneo.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 70 - Crises existenciais, morte, drogas e lutas de minorias
              dão o tom das histórias. Surgem diversos heróis negros, pobres e
              orientais. Mas o que pega mesmo é a chegada do violento<br></br>
              Justiceiro e dos e dos novos X-Men: Tempestade, Noturno, Colossus
              e o selvagem Wolverine.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 80 - É a era das graphic novels e das grandes sagas. Alguns
              aproveitam para se casar. Outros morrem, como Elektra, Fênix e
              Capitão Marvel.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 90 - No agora superpovoado universo Marvel, as histórias
              ganham tramas que misturam epidemias, clones, universos paralelos
              e viagens no tempo.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 2000 - Os heróis da Marvel tomam conta de Hollywood, batem
              recordes de bilheteria e se transformam em uma indústria
              bilionária — tudo isso em estúdios como Fox e Sony. A própria
              <br></br> Marvel decide se aventurar como produtora dos filmes, e
              lança Homem de Homem de Ferro em 2008. Nos quadrinhos, os heróis
              sessentões ganham força e se adaptam: Namor rejuvenesce<br></br> e
              Capitão América começa a combater o terrorismo.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Anos 2010 - Em dez anos, a Marvel Studios lançou 18 filmes —
              juntos, somam mais de 13,5 bilhões de dólares em bilheteria,
              fazendo do Universo Cinematográfico Marvel a maior franquia de
              <br></br> todos os tempos.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0, color: 'black' }}>
            <ListItemText>
              Fonte: Leia mais em:
              https://super.abril.com.br/historia/mundo-marvel/
            </ListItemText>
          </ListItem>
        </Box>
      </div>
    </>
  )
}

export default Home
