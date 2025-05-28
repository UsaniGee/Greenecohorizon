import { Box, Flex, Heading, Image, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'

const WhatWeDo = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    
      const whatWeDo = [
        { title: 'Renewable Energy Technologies ', subtitle: 'We advocate for the government to harness the power of the sun, wind, water, and bioenergy to reduce carbon emissions. We believe by focusing on policy reform, we can create jobs, and power communities with clean, sustainable energy.', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1743745034/1324_alnwkl.jpg' },
        { title: 'Ocean conservation', subtitle: 'We are passionate about ocean conservation because it plays a critical role in building sustainable carbon credits. Healthy marine ecosystems help combat climate change while providing countless benefits', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/v1743745674/2149094890_k5ajmo.jpg' },
        { title: 'Land restoration', subtitle: 'At Green Eco Horizon, we believe that restoring the land is one of the most impactful ways to fight climate change. Healthy ecosystems naturally absorb and store carbon, helping us build robust carbon credits that support climate action.', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/v1743746171/2148346117_edddoe.jpg' },
        { title: 'Water and Waste Management ', subtitle: 'We champion clean water solutions, waste-to-energy systems, and circular economy models that reduce pollution and conserve vital natural resources.', img: 'https://res.cloudinary.com/dnu4lxiie/image/upload/v1743746639/2149571880_y6ofz4.jpg' },
        { title: 'Clean Energy Finance and Carbon Markets', subtitle: 'We promote innovative financial tools like carbon credits, green bonds, and decentralized energy markets that support climate action and green investment.', img: '/images/energy.jpg' },
        { title: 'Environmental Monitoring and Data Analytics', subtitle: 'We leverage AI, IoT, and satellite data to track environmental changes, predict climate impacts, and drive smarter, data-informed decisions.', img: '/images/wildlife.jpg' },
        { title: 'Sustainable Agriculture and Food Tech', subtitle: 'We promote innovative farming practices that reduce land use, conserve water, and improve food security, supporting healthier ecosystems.', img: '/images/garden.jpg' },
        { title: 'Energy Storage and Efficiency', subtitle: " We develop smart energy storage systems and efficiency technologies that reduce waste, stabilize the grid, and ensure clean energy is available when it's needed most.", img: '/images/workshop.jpg' },
         { title: 'Carbon Capture, Utilization, and Storage (CCUS)', subtitle: " We support technologies that capture and reuse carbon emissions, transforming them into valuable products and reducing the carbon footprint of industries", img: '/images/workshop.jpg' },
          { title: 'Green Building and Urban Design', subtitle: "  We advocate for sustainable construction materials and smart city designs that reduce energy use and create healthier urban environments.", img: '/images/workshop.jpg' },
      ];
  return (
   <Box >
       {/* Header Section */}
          <Box
            position="relative"
            bg="green.700"
            height={{ base: '300px', md: '500px' }}
            color="white"
            textAlign="center"
          >
            <Image
              src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1748338077/germination-microgreens-germination-seeds-home_irkwha.jpg"
              alt="Forest"
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
              <Heading fontSize={{ base: '3xl', md: '5xl' }}>What We Do</Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }} maxW="600px" mt={4}>
                Our Work for a Sustainable Future
              </Text>
            </Flex>
          </Box>


  {/* What We Do */}
       <Box py={16} px={6} bg="gray.100">
         <VStack spacing={8} maxW="7xl" mx="auto">
           <Heading>What We Do</Heading>
           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
             {whatWeDo.map((item, index) => (
               <Box
                 key={index}
                 bg={cardBg}
                 boxShadow="md"
                 borderRadius="xl"
                 overflow="hidden"
                 transition="all 0.3s"
                 _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
               >
                 <Image src={item.img} alt={item.title}  loading= "lazy" height="160px" width="100%" objectFit="cover" />
                 <Box p={4}>
                   <Heading size="md">{item.title}</Heading>
                   <Text fontSize="sm" mt={2}>{item.subtitle}</Text>
                 </Box>
               </Box>
             ))}
           </SimpleGrid>
         </VStack>
       </Box>
      </Box>
  )
}

export default WhatWeDo
