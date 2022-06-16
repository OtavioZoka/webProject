import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Avengers_Logo from '../img/Avengers_Logo'
import CardCharacter from './CardCharacter'

const TableCharacter = ({ items, isLoading }) => {
  const BoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const [openModal, setOpenModal] = useState(false)
  const [descriptionCard, SetDescritptionCard] = useState('')

  console.log(isLoading)

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      {isLoading ? (
        <section>
          <Avengers_Logo />
        </section>
      ) : (
        <section className="contents">
          {items.map((item) => (
            <CardCharacter
              key={item.id}
              item={item}
              openModal={setOpenModal}
              description={SetDescritptionCard}
            ></CardCharacter>
          ))}

          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={BoxStyle}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  width: '300px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {descriptionCard}
              </Typography>
            </Box>
          </Modal>
        </section>
      )}
    </>
  )
}

export default TableCharacter
