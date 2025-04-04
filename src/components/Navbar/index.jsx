import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import Links from './Links'

const Navbar = () => {
  return (
   < Flex className='absolute z-10 w-full justify-between text-white' alignItems={"center"}>
   <Logo />
   {/* <Links /> */}
   <Box></Box>
   </Flex>
  )
}

export default Navbar
