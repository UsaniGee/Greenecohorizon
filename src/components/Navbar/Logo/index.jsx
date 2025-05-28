import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Box>
     <a href="/">
        <Image className='w-[40%] md:w-[40%] p-2 object-cover' src='https://res.cloudinary.com/dnu4lxiie/image/upload/v1743737627/Green_ECO_2-removebg-preview_zy9ecy.png'  loading= "lazy"/>
     </a>
    </Box>
  )
}

export default Logo
