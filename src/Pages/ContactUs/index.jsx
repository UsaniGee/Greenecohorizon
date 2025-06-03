import React, { useState } from 'react';
import {
  Box, Image, 
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Grid,
  GridItem,
  Card,
  CardBody,
  Flex,
  Icon,
  Badge,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Leaf, 
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Send
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const bgGradient = useColorModeValue(
    'linear(to-br, green.50, teal.50, emerald.50)',
    'linear(to-br, green.900, teal.900, emerald.900)'
  );
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('green.700', 'green.300');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

 const socialIcons = [
     { Icon: Twitter, color: 'darkblue', link: "#" },
     { Icon: Facebook, color: 'blue', link: "#" },
     { Icon: Instagram, color: 'pink', link: "https://www.instagram.com/greenecohorizon_?igsh=eTdhdHNmcXVzOGNt&utm_source=qr" },
     { Icon: Linkedin, color: 'gray', link: "https://www.linkedin.com/company/green-eco-horizon/" }
   ];

  return (
    <Box minH="100vh" bgGradient={bgGradient}>
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
      <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" my={12}>
          <HStack spacing={3} justify="center">
            <Icon as={Leaf} w={10} h={10} color="green.500" />
            <Heading
              size="2xl"
              bgGradient="linear(to-r, green.600, teal.600)"
              bgClip="text"
              fontWeight="bold"
            >
              Get in Touch
            </Heading>
          </HStack>
          
          <Text fontSize="xl" color={textColor} maxW="3xl" mb={6}>
            Join us in creating a sustainable future. Whether you have questions about our environmental initiatives 
            or want to collaborate on green projects, we'd love to hear from you.
          </Text>
          
          <Badge
            colorScheme="green"
            variant="subtle"
            px={6}
            py={3}
            borderRadius="full"
            fontSize="md"
            fontWeight="medium"
          >
            🌱 Building a Greener Tomorrow
          </Badge>
        </VStack>

        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12}>
          {/* Contact Form */}
          <GridItem>
            <Card shadow="2xl" borderRadius="3xl" overflow="hidden">
              <Box h={2} bgGradient="linear(to-r, green.400, teal.400, green.500)" />
              <CardBody p={8}>
                <Heading size="lg" color={headingColor} mb={6}>
                  Send us a Message
                </Heading>
                
                <VStack spacing={6}>
                  <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} w="full">
                    <FormControl isRequired>
                      <FormLabel color={textColor} fontWeight="medium">
                        Full Name
                      </FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        borderColor="green.200"
                        focusBorderColor="green.400"
                        _hover={{ borderColor: 'green.300' }}
                        size="lg"
                      />
                    </FormControl>
                    
                    <FormControl isRequired>
                      <FormLabel color={textColor} fontWeight="medium">
                        Email
                      </FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        borderColor="green.200"
                        focusBorderColor="green.400"
                        _hover={{ borderColor: 'green.300' }}
                        size="lg"
                      />
                    </FormControl>
                  </Grid>
                  
                  <FormControl isRequired>
                    <FormLabel color={textColor} fontWeight="medium">
                      Subject
                    </FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      borderColor="green.200"
                      focusBorderColor="green.400"
                      _hover={{ borderColor: 'green.300' }}
                      size="lg"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel color={textColor} fontWeight="medium">
                      Message
                    </FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows={6}
                      borderColor="green.200"
                      focusBorderColor="green.400"
                      _hover={{ borderColor: 'green.300' }}
                      resize="none"
                    />
                  </FormControl>
                  
                  <Button
                    onClick={handleSubmit}
                    w="full"
                    size="lg"
                    bgGradient="linear(to-r, green.500, teal.500)"
                    color="white"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: 'linear(to-r, green.600, teal.600)',
                      transform: 'translateY(-2px)',
                      shadow: 'lg'
                    }}
                    transition="all 0.3s"
                    leftIcon={<Icon as={Send} />}
                  >
                    Send Message
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </GridItem>

          {/* Contact Information */}
          <GridItem>
            <VStack spacing={6}>
              {/* Contact Details Card */}
              <Card shadow="xl" borderRadius="2xl" w="full" bg={cardBg}>
                <CardBody p={8}>
                  <Heading size="lg" color={headingColor} mb={6}>
                    Contact Information
                  </Heading>
                  
                  <VStack spacing={6} align="stretch">
                    <HStack spacing={4} align="flex-start">
                      <Icon as={Phone} w={6} h={6} color="green.500" mt={1} />
                      <Box>
                        <Text fontWeight="semibold" color={textColor} mb={1}>
                          Phone
                        </Text>
                        <Text color="green.600" fontWeight="medium">
                         <a href="tel:+2347049324714"> + (234) 704 932 4714</a>
                        </Text>
                      </Box>
                    </HStack>
                    
                    <HStack spacing={4} align="flex-start">
                      <Icon as={Mail} w={6} h={6} color="green.500" mt={1} />
                      <Box>
                        <Text fontWeight="semibold" color={textColor} mb={1}>
                          Email
                        </Text>
                        <Text color="green.600" fontWeight="medium" >
                         <a href="mailto:hello@greenecohorizon.org">hello@greenecohorizon.org</a>
                        </Text>
                      </Box>
                    </HStack>
                    
                    <HStack spacing={4} align="flex-start">
                      <Icon as={MapPin} w={6} h={6} color="green.500" mt={1} />
                      <Box>
                        <Text fontWeight="semibold" color={textColor} mb={1}>
                          Address
                        </Text>
                        <Text color="green.600" fontWeight="medium">
                          Asokoro, Abuja.
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>

              {/* Social Media Card */}
              <Card shadow="xl" borderRadius="2xl" w="full" bg={cardBg}>
                <CardBody p={8}>
                  <Heading size="lg" color={headingColor} mb={6} textAlign="center">
                    Follow Our Green Journey
                  </Heading>
                  
                 <Flex justify="center" gap={4} mb={6}>
                                        {socialIcons.map(({ Icon, color, link }, index) => (
                                        <a href={link} target='blank'  key={index}>
                                            <Button
                                            size="lg"
                                            borderRadius="full"
                                            bg="green.50"
                                            color="green.600"
                                            _hover={{
                                              bg: `${color}.100`,
                                              color: `${color}.600`,
                                              transform: 'translateY(-2px)',
                                              shadow: 'md'
                                            }}
                                            transition="all 0.3s"
                                            p={4}
                                          >
                                            <Icon size={24} />
                                          </Button>
                                        </a>
                                        ))}
                                      </Flex>
                  
                  <Text textAlign="center" color={textColor} fontSize="sm">
                    Stay updated with our latest environmental initiatives and sustainability tips
                  </Text>
                </CardBody>
              </Card>

              {/* Quick Info Card */}
              <Card
                shadow="xl"
                borderRadius="2xl"
                w="full"
                bgGradient="linear(to-r, green.50, emerald.50)"
                border="2px"
                borderColor="green.200"
              >
                <CardBody p={6}>
                  <VStack spacing={4} textAlign="center">
                    <HStack spacing={2} justify="center">
                      <Icon as={Leaf} w={8} h={8} color="green.500" />
                      <Heading size="md" color="green.700">
                        Eco-Friendly Promise
                      </Heading>
                    </HStack>
                    <Text color="green.600" fontSize="sm" lineHeight="relaxed">
                      We respond to all inquiries within 24 hours and offset the carbon footprint 
                      of every email we send. Together, we're making communication greener! 🌍
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </VStack>
          </GridItem>
        </Grid>

        {/* Footer Note */}
        <VStack spacing={4} mt={12} textAlign="center">
          <Divider borderColor="green.200" />
          <Text color={textColor} fontSize="sm">
            Every message you send helps us grow our green community. Thank you for being part of the solution! 🌱
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactUs