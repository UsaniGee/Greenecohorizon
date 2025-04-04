import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  
  )
}

export default Root
