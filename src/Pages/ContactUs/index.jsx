import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ContactUs = () => {
  return (
   <Box>
{/* Header Section */}
      <Box
        position="relative"
        bg="green.700"
        height={{ base: '300px', md: '500px' }}
        color="white"
        textAlign="center"
      >
        <Image
          src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1748340935/2149894710_fthi1t.jpg"
          alt="Contact Us"
           loading= "lazy"
          objectFit="cover"
          width="100%"
          height="100%"
          opacity={0.4}
          position="absolute"
        />
        <Flex
          direction="column"
          justify="center"
          align="center"
          position="relative"
          height="100%"
          zIndex={1}
        >
          <Heading fontSize={{ base: '3xl', md: '5xl' }}>Contact Us</Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} maxW="600px" mt={4}>
           We’re Here to Help
          </Text>
        </Flex>
      </Box>
   </Box>
  )
}

export default ContactUs
