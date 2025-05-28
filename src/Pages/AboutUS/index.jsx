import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

const AboutUs = () => {
  

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
          src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1748340362/23355_da1uik.jpg"
          alt="About Us"
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
          <Heading fontSize={{ base: '3xl', md: '5xl' }}>About Us</Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} maxW="600px" mt={4}>
            Championing a greener, cleaner world through action, education, and advocacy.
          </Text>
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box py={16} px={6} bg="gray.50">
        <VStack spacing={6} maxW="4xl" mx="auto" textAlign="center">
          <Heading>Who We Are</Heading>
          <Text fontSize="lg">
            Green Eco Horizon is a nonprofit organization committed to environmental sustainability and climate resilience in Nigeria. Just like a doctor treats a patient according to their specific illness, we address the unique environmental needs of different communities. Our mission is to empower these communities to adapt to and mitigate the impacts of climate change through innovative, technology-driven solutions. We focus on land restoration, ocean conservation with focus on cutting-edge green technologies like carbon capture, renewable energy, sustainable agriculture, artificial intelligence (AI), data-driven analytics, and carbon credits  to tackle pressing environmental challenges like pollution, deforestation, and carbon emissions.

          </Text>
        </VStack>
      </Box>

      {/* Mission & Vision */}
      <Box py={16} px={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="6xl" mx="auto">
          <Box>
            <Heading size="lg" mb={4}>Our Mission</Heading>
            <Text fontSize="md">
              To inspire and empower communities to take sustainable actions for a greener planet.
            </Text>
          </Box>
          <Box>
            <Heading size="lg" mb={4}>Our Vision</Heading>
            <Text fontSize="md">
              A thriving world where people and nature coexist in harmony, preserving biodiversity
              and reducing carbon footprints.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

     

      {/* Our Values */}
      <Box py={16} px={6}>
        <VStack spacing={6} maxW="4xl" mx="auto" textAlign="center">
          <Heading>Our Core Values</Heading>
          <Text fontSize="lg">
            Sustainability • Community • Integrity • Innovation • Transparency • Collaboration
          </Text>
        </VStack>
      </Box>

      {/* Our Impact */}
      <Box py={16} px={6} bg="green.50">
        <VStack spacing={6} maxW="6xl" mx="auto" textAlign="center">
          <Heading>Our Impact</Heading>
          <Text fontSize="lg">
            Since our founding, we've planted over 100,000 trees, educated 20,000 students,
            and diverted 500 tons of waste from landfills. And we're just getting started.
          </Text>
          <Image  loading="lazy" src="/images/impact.jpg" alt="Impact" borderRadius="xl" boxShadow="lg" />
        </VStack>
      </Box>
    </Box>
  );
};

export default AboutUs;
