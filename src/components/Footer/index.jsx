import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { 
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {

 const socialIcons = [
    { Icon: Twitter, color: 'twitter', link: "#" },
    { Icon: Facebook, color: 'blue', link: "#" },
   { Icon: Instagram, color: 'pink', link: "https://www.instagram.com/greenecohorizon_?igsh=eTdhdHNmcXVzOGNt&utm_source=qr" },
        { Icon: Linkedin, color: 'gray', link: "https://www.linkedin.com/company/green-eco-horizon/" }
  ];


  return (
    <Box textAlign={"center"} padding={10} >
           {/* Bottom Section */}
           <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img width={"50px"} loading="lazy" src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1743737627/Green_ECO_2-removebg-preview_zy9ecy.png" alt="GreenEcoHorizon Logo" className="h-8 mr-2" /> 
          <span className="text-xs">&copy; 2025 Green Eco Horizon. All rights reserved. | <a href="#">Privacy Policy </a>| <a href="#">Terms of Use</a></span>
        </div>

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
      </div>
    </Box>
  )
}

export default Footer
