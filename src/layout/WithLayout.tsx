import React from 'react'
import Header from '../components/header'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// eslint-disable-next-line react/display-name
const WithLayout = (Component: React.FC) => () => {
  return (
    <Container sx={{ marginTop: '5em' }} >
      <Header />
      <Box display="flex" justifyContent="center" flexDirection="column" gap={2}>
        <Component />
      </Box>
    </Container>
  )
}

export default WithLayout
